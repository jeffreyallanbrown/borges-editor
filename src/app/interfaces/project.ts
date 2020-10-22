export interface Project {
  _id?: Number,
  user?: Number,
  name?: String,
  type?: Number,
  description?: String,
  status?: Number,
  tags?: Array<Object>,
  folders?: Array<Object>,
  created?: Date,
  updated?: Date
}

export interface ProjectFolder {
  _id: Number,
  name: String,
  type: Number,
  documents: Array<FolderDocument>,
  children: Array<ProjectFolder>
}

export interface FolderDocument {
  _id: Number,
  name: String,
  contents: String
}
