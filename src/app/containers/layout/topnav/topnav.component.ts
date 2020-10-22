import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { Subscription } from "rxjs";
import { SidebarService, ISidebar } from "../sidebar/sidebar.service";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-topnav",
  templateUrl: "./topnav.component.html",
})
export class TopnavComponent implements OnInit, OnDestroy {
  adminRoot = environment.adminRoot;
  sidebar: ISidebar;
  subscription: Subscription;
  displayName = "";
  currentLanguage: string;
  isSingleLang;
  isFullScreen = false;
  isDarkModeActive = false;
  searchKey = "";

  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) {

  }



  fullScreenClick() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  @HostListener("document:fullscreenchange", ["$event"])
  handleFullscreen(event) {
    if (document.fullscreenElement) {
      this.isFullScreen = true;
    } else {
      this.isFullScreen = false;
    }
  }

  async ngOnInit() {
    this.subscription = this.sidebarService.getSidebar().subscribe(
      (res) => {
        this.sidebar = res;
      },
      (err) => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  menuButtonClick = (
    e: { stopPropagation: () => void },
    menuClickCount: number,
    containerClassnames: string
  ) => {
    if (e) {
      e.stopPropagation();
    }

    setTimeout(() => {
      const event = document.createEvent("HTMLEvents");
      event.initEvent("resize", false, false);
      window.dispatchEvent(event);
    }, 350);

    this.sidebarService.setContainerClassnames(
      ++menuClickCount,
      containerClassnames,
      this.sidebar.selectedMenuHasSubItems
    );
  };

  mobileMenuButtonClick = (
    event: { stopPropagation: () => void },
    containerClassnames: string
  ) => {
    if (event) {
      event.stopPropagation();
    }
    this.sidebarService.clickOnMobileMenu(containerClassnames);
  };

  onSignOut() {

  }

  searchKeyUp(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.search();
    } else if (event.key === "Escape") {
      const input = document.querySelector(".mobile-view");
      if (input && input.classList) {
        input.classList.remove("mobile-view");
      }
      this.searchKey = "";
    }
  }

  searchAreaClick(event) {
    event.stopPropagation();
  }
  searchClick(event) {
    if (window.innerWidth < environment.menuHiddenBreakpoint) {
      let elem = event.target;
      if (!event.target.classList.contains("search")) {
        if (event.target.parentElement.classList.contains("search")) {
          elem = event.target.parentElement;
        } else if (
          event.target.parentElement.parentElement.classList.contains("search")
        ) {
          elem = event.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains("mobile-view")) {
        this.search();
        elem.classList.remove("mobile-view");
      } else {
        elem.classList.add("mobile-view");
      }
    } else {
      this.search();
    }
    event.stopPropagation();
  }

  search() {
    if (this.searchKey && this.searchKey.length > 1) {
      this.router.navigate([this.adminRoot + "/#"], {
        queryParams: { key: this.searchKey.toLowerCase().trim() },
      });
      this.searchKey = "";
    }
  }

  @HostListener("document:click", ["$event"])
  handleDocumentClick(event) {
    const input = document.querySelector(".mobile-view");
    if (input && input.classList) {
      input.classList.remove("mobile-view");
    }
    this.searchKey = "";
  }
}
