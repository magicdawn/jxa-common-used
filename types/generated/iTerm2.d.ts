export namespace iTerm2 {
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
     * The frontmost window
     */
    currentWindow(): any
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
     * The unique identifier of the session.
     */
    id(): number
    /**
     * The alternate unique identifier of the session.
     */
    alternateIdentifier(): string
    /**
     * The full title of the window.
     */
    name(): string
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
    miniaturizable(): boolean
    /**
     * Whether the window is currently minimized.
     */
    miniaturized(): boolean
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
     * Whether the window is currently the frontmost window.
     */
    frontmost(): boolean
    /**
     * The currently selected tab
     */
    currentTab(): any
    /**
     * The current session in a window
     */
    currentSession(): any
    /**
     * Whether the window is a hotkey window.
     */
    isHotkeyWindow(): boolean
    /**
     * If the window is a hotkey window, this gives the name of the profile that created the window.
     */
    hotkeyWindowProfile(): string
    /**
     * The position of the window, relative to the upper left corner of the screen.
     */
    position(): any
    /**
     * The position of the window, relative to the lower left corner of the screen.
     */
    origin(): any
    /**
     * The width and height of the window
     */
    size(): any
    /**
     * The bounding rectangle, relative to the lower left corner of the screen.
     */
    frame(): any
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * A terminal tab
   */
  export interface Tab {
    /**
     * The current session in a tab
     */
    currentSession(): any
    /**
     * Index of tab in parent tab view control
     */
    index(): number
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  /**
   * A terminal session
   */
  export interface Session {
    /**
     * The unique identifier of the session.
     */
    id(): string
    /**
     * The session has received output recently.
     */
    isProcessing(): boolean
    /**
     * The terminal is at the shell prompt. Requires shell integration.
     */
    isAtShellPrompt(): boolean
    columns(): number
    rows(): number
    tty(): string
    /**
     * The currently visible contents of the session.
     */
    contents(): string
    /**
     * The currently visible contents of the session.
     */
    text(): string
    colorPreset(): string
    backgroundColor(): any
    boldColor(): any
    cursorColor(): any
    cursorTextColor(): any
    foregroundColor(): any
    selectedTextColor(): any
    selectionColor(): any
    ANSIBlackColor(): any
    ANSIRedColor(): any
    ANSIGreenColor(): any
    ANSIYellowColor(): any
    ANSIBlueColor(): any
    ANSIMagentaColor(): any
    ANSICyanColor(): any
    ANSIWhiteColor(): any
    ANSIBrightBlackColor(): any
    ANSIBrightRedColor(): any
    ANSIBrightGreenColor(): any
    ANSIBrightYellowColor(): any
    ANSIBrightBlueColor(): any
    ANSIBrightMagentaColor(): any
    ANSIBrightCyanColor(): any
    ANSIBrightWhiteColor(): any
    underlineColor(): any
    /**
     * Whether the use a dedicated color for underlining.
     */
    useUnderlineColor(): boolean
    backgroundImage(): string
    name(): string
    transparency(): any
    uniqueID(): string
    /**
     * The session's profile name
     */
    profileName(): string
    /**
     * ENQ Answerback string
     */
    answerbackString(): string
  }

  // CLass Extension

  // Records

  // Function options
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
    to: any
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

  export interface RequestCookieOptionalParameter {
    /**
     * Name of script using the cookie. This is shown in the console.
     */
    andKeyForAppNamed?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface CreateTabOptionalParameter {
    /**
     * The profile name
     */
    withProfile: string
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface CreateTabWithDefaultProfileOptionalParameter {
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface CreateWindowWithProfileOptionalParameter {
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface LaunchApiScriptNamedOptionalParameter {
    /**
     * Arguments to pass to script
     */
    arguments?: any
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface CreateWindowWithDefaultProfileOptionalParameter {
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface WriteOptionalParameter {
    /**
     * Filename to send the contents of
     */
    contentsOfFile?: any
    /**
     * Text to send
     */
    text?: string
    /**
     * If newline should be added to end of text (default: yes)
     */
    newline?: boolean
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface SplitVerticallyOptionalParameter {
    /**
     * Name of profile for new session.
     */
    withProfile: string
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface SplitVerticallyWithDefaultProfileOptionalParameter {
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface SplitVerticallyWithSameProfileOptionalParameter {
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface SplitHorizontallyOptionalParameter {
    /**
     * Name of profile for new session.
     */
    withProfile: string
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface SplitHorizontallyWithDefaultProfileOptionalParameter {
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface SplitHorizontallyWithSameProfileOptionalParameter {
    /**
     * Shell command to run
     */
    command?: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface VariableOptionalParameter {
    /**
     * Name of variable
     */
    named: string
  }

  /**
   * This file was automatically generated by json-schema-to-typescript.
   * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
   * and run json-schema-to-typescript to regenerate this file.
   */

  export interface SetVariableOptionalParameter {
    /**
     * Name of variable
     */
    named: string
    /**
     * New value
     */
    to: string
  }
}
export interface iTerm2 extends iTerm2.Application {
  // Functions

  /**
   * Return the number of elements of a particular class within an object.
   * @param directParameter the object whose elements are to be counted
   * @param option
   * @return the number of elements
   */
  count(directParameter: any, option?: iTerm2.CountOptionalParameter): number

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
   *
   */
  duplicate(directParameter: any, option?: iTerm2.DuplicateOptionalParameter): void

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
  make(option?: iTerm2.MakeOptionalParameter): any

  /**
   * Move object(s) to a new location.
   * @param directParameter the object(s) to move
   * @param option
   *
   */
  move(directParameter: any, option?: iTerm2.MoveOptionalParameter): void

  /**
   * Close a document.
   * @param directParameter the session, tab, or window to close.
   *
   */
  close(directParameter: any): void

  /**
      * Request a Python API cookie

      * @param option
      * @return A cookie that can be used to connect to the Python API endpoint
      */
  requestCookie(option?: iTerm2.RequestCookieOptionalParameter): string

  /**
   * Create a new tab
   * @param directParameter the session, tab, or window to close.
   * @param option
   * @return The tab that was created
   */
  createTab(directParameter: any, option?: iTerm2.CreateTabOptionalParameter): iTerm2.Tab

  /**
   * Create a new tab with the default profile
   * @param directParameter The window in which to create a new tab
   * @param option
   * @return The tab that was created
   */
  createTabWithDefaultProfile(
    directParameter: any,
    option?: iTerm2.CreateTabWithDefaultProfileOptionalParameter
  ): iTerm2.Tab

  /**
   * Create a new window
   * @param directParameter The profile name
   * @param option
   * @return The window that was created
   */
  createWindowWithProfile(
    directParameter: {},
    option?: iTerm2.CreateWindowWithProfileOptionalParameter
  ): iTerm2.Window

  /**
   * Create a hotkey window
   * @param directParameter The profile name
   * @return The window that was created
   */
  createHotkeyWindowWithProfile(directParameter: {}): iTerm2.Window

  /**
   * Launch API script by name
   * @param directParameter The script’s name
   * @param option
   *
   */
  launchAPIScriptNamed(
    directParameter: {},
    option?: iTerm2.LaunchApiScriptNamedOptionalParameter
  ): void

  /**
   * Invokes an expression, such as a registered function.
   * @param directParameter The expression to invoke, such as a function call.
   * @return String representation of the result, if available. Function calls’ return values are not available.
   */
  invokeAPIExpression(directParameter: {}): string

  /**
      * Create a new window with the default profile

      * @param option
      * @return The window that was created
      */
  createWindowWithDefaultProfile(
    option?: iTerm2.CreateWindowWithDefaultProfileOptionalParameter
  ): iTerm2.Window

  /**
   * Send text as though it was typed.
   * @param directParameter The session to send to
   * @param option
   *
   */
  write(directParameter: any, option?: iTerm2.WriteOptionalParameter): void

  /**
   * Make receiver visible and selected.
   * @param directParameter The object to send to
   *
   */
  select(directParameter: any): void

  /**
   * Split a session vertically.
   * @param directParameter The object to send to
   * @param option
   * @return The session that was created
   */
  splitVertically(
    directParameter: any,
    option?: iTerm2.SplitVerticallyOptionalParameter
  ): iTerm2.Session

  /**
   * Split a session vertically, using the default profile for the new session
   * @param directParameter The object to send to
   * @param option
   * @return The session that was created
   */
  splitVerticallyWithDefaultProfile(
    directParameter: any,
    option?: iTerm2.SplitVerticallyWithDefaultProfileOptionalParameter
  ): iTerm2.Session

  /**
   * Split a session vertically, using the original session's profile for the new session
   * @param directParameter The object to send to
   * @param option
   * @return The session that was created
   */
  splitVerticallyWithSameProfile(
    directParameter: any,
    option?: iTerm2.SplitVerticallyWithSameProfileOptionalParameter
  ): iTerm2.Session

  /**
   * Split a session horizontally.
   * @param directParameter The object to send to
   * @param option
   * @return The session that was created
   */
  splitHorizontally(
    directParameter: any,
    option?: iTerm2.SplitHorizontallyOptionalParameter
  ): iTerm2.Session

  /**
   * Split a session horizontally, using the default profile for the new session
   * @param directParameter The object to send to
   * @param option
   * @return The session that was created
   */
  splitHorizontallyWithDefaultProfile(
    directParameter: any,
    option?: iTerm2.SplitHorizontallyWithDefaultProfileOptionalParameter
  ): iTerm2.Session

  /**
   * Split a session horizontally, using the original session's profile for the new session
   * @param directParameter The object to send to
   * @param option
   * @return The session that was created
   */
  splitHorizontallyWithSameProfile(
    directParameter: any,
    option?: iTerm2.SplitHorizontallyWithSameProfileOptionalParameter
  ): iTerm2.Session

  /**
   * Returns the value of a session variable with the given name
   * @param directParameter The object to send to
   * @param option
   * @return The variable's value
   */
  variable(directParameter: any, option?: iTerm2.VariableOptionalParameter): string

  /**
   * Sets the value of a session variable
   * @param directParameter The object to send to
   * @param option
   * @return The variable's value
   */
  setVariable(directParameter: any, option?: iTerm2.SetVariableOptionalParameter): string

  /**
   * Reveals a hotkey window. Only to be called on windows that are hotkey windows.
   * @param directParameter The window in which to create a new tab
   *
   */
  revealHotkeyWindow(directParameter: any): void

  /**
   * Hides a hotkey window. Only to be called on windows that are hotkey windows.
   * @param directParameter The window in which to create a new tab
   *
   */
  hideHotkeyWindow(directParameter: any): void

  /**
   * Toggles the visibility of a hotkey window. Only to be called on windows that are hotkey windows.
   * @param directParameter The window in which to create a new tab
   *
   */
  toggleHotkeyWindow(directParameter: any): void
}
