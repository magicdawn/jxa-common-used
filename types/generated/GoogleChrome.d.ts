export namespace GoogleChrome {
  // Default Application
  export interface Application {}
  // Class
  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * The application's top-level scripting object.
   */
  export interface Application {
    /**
     * The name of the application.
     */
    name(): string
    /**
     * Is this the frontmost (active) application?
     */
    frontmost(): boolean
    /**
     * The version of the application.
     */
    version(): string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * A window.
   */
  export interface Window {
    /**
     * The given name of the window.
     */
    givenName(): string
    /**
     * The full title of the window.
     */
    name(): string
    /**
     * The unique identifier of the window.
     */
    id(): number
    /**
     * The index of the window, ordered front to back.
     */
    index(): number
    /**
     * The bounding rectangle of the window.
     */
    bounds(): any
    /**
     * Whether the window has a close box.
     */
    closeable(): boolean
    /**
     * Whether the window can be minimized.
     */
    minimizable(): boolean
    /**
     * Whether the window is currently minimized.
     */
    minimized(): boolean
    /**
     * Whether the window can be resized.
     */
    resizable(): boolean
    /**
     * Whether the window is currently visible.
     */
    visible(): boolean
    /**
     * Whether the window can be zoomed.
     */
    zoomable(): boolean
    /**
     * Whether the window is currently zoomed.
     */
    zoomed(): boolean
    /**
     * Returns the currently selected tab
     */
    activeTab(): any
    /**
     * Represents the mode of the window which can be 'normal' or 'incognito', can be set only once during creation of the window.
     */
    mode(): string
    /**
     * The index of the active tab.
     */
    activeTabIndex(): number
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * A tab.
   */
  export interface Tab {
    /**
     * Unique ID of the tab.
     */
    id(): number
    /**
     * The title of the tab.
     */
    title(): string
    /**
     * The url visible to the user.
     */
    URL(): string
    /**
     * Is loading?
     */
    loading(): boolean
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * A bookmarks folder that contains other bookmarks folder and bookmark items.
   */
  export interface BookmarkFolder {
    /**
     * Unique ID of the bookmark folder.
     */
    id(): number
    /**
     * The title of the folder.
     */
    title(): string
    /**
     * Returns the index with respect to its parent bookmark folder.
     */
    index(): number
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * An item consists of an URL and the title of a bookmark
   */
  export interface BookmarkItem {
    /**
     * Unique ID of the bookmark item.
     */
    id(): number
    /**
     * The title of the bookmark item.
     */
    title(): string
    /**
     * The URL of the bookmark.
     */
    URL(): string
    /**
     * Returns the index with respect to its parent bookmark folder.
     */
    index(): number
  }

  // CLass Extension
  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * The application's top-level scripting object.
   */
  export interface Application {
    /**
     * The bookmarks bar bookmark folder.
     */
    bookmarksBar(): any
    /**
     * The other bookmarks bookmark folder.
     */
    otherBookmarks(): any
  }

  // Records

  // Function options
  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface SaveOptionalParameter {
    /**
     * The file in which to save the object.
     */
    in?: any
    /**
     * The file type in which to save the data. Can be 'only html' or 'complete html', default is 'complete html'.
     */
    as?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface CountOptionalParameter {
    /**
     * The class of objects to be counted.
     */
    each?: any
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface DuplicateOptionalParameter {
    /**
     * The location for the new object(s).
     */
    to?: any
    /**
     * Properties to be set in the new duplicated object(s).
     */
    withProperties?: any
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface MakeOptionalParameter {
    /**
     * The class of the new object.
     */
    new: any
    /**
     * The location at which to insert the object.
     */
    at?: any
    /**
     * The initial contents of the object.
     */
    withData?: any
    /**
     * The initial values for properties of the object.
     */
    withProperties?: any
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface MoveOptionalParameter {
    /**
     * The new location for the object(s).
     */
    to: any
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface ExecuteOptionalParameter {
    /**
     * The javascript code to execute.
     */
    javascript: string
  }
}
export interface GoogleChrome extends GoogleChrome.Application {
  // Functions

  /**
   * Save an object.
   * @param directParameter the object to save, usually a document or window
   * @param option
   *
   */
  save(directParameter: any, option?: GoogleChrome.SaveOptionalParameter): void

  /**
   * Open a document.
   * @param directParameter The file(s) to be opened.
   *
   */
  open(directParameter: {}): void

  /**
   * Close a window.
   * @param directParameter the document(s) or window(s) to close.
   *
   */
  close(directParameter: any): void

  /**
      * Quit the application.

      *
      */
  quit(): void

  /**
   * Return the number of elements of a particular class within an object.
   * @param directParameter the object whose elements are to be counted
   * @param option
   * @return the number of elements
   */
  count(directParameter: any, option?: GoogleChrome.CountOptionalParameter): number

  /**
   * Delete an object.
   * @param directParameter the object to delete
   *
   */
  delete(directParameter: any): void

  /**
   * Copy object(s) and put the copies at a new location.
   * @param directParameter the object(s) to duplicate
   * @param option
   * @return the duplicated object(s)
   */
  duplicate(directParameter: any, option?: GoogleChrome.DuplicateOptionalParameter): any

  /**
   * Verify if an object exists.
   * @param directParameter the object in question
   * @return true if it exists, false if not
   */
  exists(directParameter: any): boolean

  /**
      * Make a new object.

      * @param option
      * @return to the new object
      */
  make(option?: GoogleChrome.MakeOptionalParameter): any

  /**
   * Move object(s) to a new location.
   * @param directParameter the object(s) to move
   * @param option
   * @return the moved object(s)
   */
  move(directParameter: any, option?: GoogleChrome.MoveOptionalParameter): any

  /**
   * Print an object.
   * @param directParameter The file(s) or document(s) to be printed.
   *
   */
  print(directParameter: any): void

  /**
   * Reload a tab.
   * @param directParameter The tab to execute the command in.
   *
   */
  reload(directParameter: any): void

  /**
   * Go Back (If Possible).
   * @param directParameter The tab to execute the command in.
   *
   */
  goBack(directParameter: any): void

  /**
   * Go Forward (If Possible).
   * @param directParameter The tab to execute the command in.
   *
   */
  goForward(directParameter: any): void

  /**
   * Select all.
   * @param directParameter The tab to execute the command in.
   *
   */
  selectAll(directParameter: any): void

  /**
   * Cut selected text (If Possible).
   * @param directParameter The tab to execute the command in.
   *
   */
  cutSelection(directParameter: any): void

  /**
   * Copy text.
   * @param directParameter The tab to execute the command in.
   *
   */
  copySelection(directParameter: any): void

  /**
   * Paste text (If Possible).
   * @param directParameter The tab to execute the command in.
   *
   */
  pasteSelection(directParameter: any): void

  /**
   * Undo the last change.
   * @param directParameter The tab to execute the command in.
   *
   */
  undo(directParameter: any): void

  /**
   * Redo the last change.
   * @param directParameter The tab to execute the command in.
   *
   */
  redo(directParameter: any): void

  /**
   * Stop the current tab from loading.
   * @param directParameter The tab to execute the command in.
   *
   */
  stop(directParameter: any): void

  /**
   * View the HTML source of the tab.
   * @param directParameter The tab to execute the command in.
   *
   */
  viewSource(directParameter: any): void

  /**
   * Execute a piece of javascript.
   * @param directParameter The tab to execute the command in.
   * @param option
   * @return undefined
   */
  execute(directParameter: any, option?: GoogleChrome.ExecuteOptionalParameter): any
}
