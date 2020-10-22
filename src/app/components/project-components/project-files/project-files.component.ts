import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { ProjectFolder } from 'src/app/interfaces/project';

const FolderData: ProjectFolder[] = [
  {
    _id: 1,
    name: 'Primary',
    type: 1,
    documents: [],
    children: [
      {
      _id: 2,
      name: 'Secondary',
      type: 122,
      documents: [],
      children: []
      }
    ],
  }
];

@Component({
  selector: 'app-project-files',
  templateUrl: './project-files.component.html',
  styleUrls: ['./project-files.component.css']
})
export class ProjectFilesComponent {
  treeControl = new NestedTreeControl<ProjectFolder>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ProjectFolder>();

  constructor() {
    this.dataSource.data = FolderData;
  }

  hasChild = (_: number, node: ProjectFolder) => !!node.children && node.children.length > 0;
}
