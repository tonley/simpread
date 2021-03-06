console.log( "=== simpread message load ===" )

const action = {
    focus_mode     : "focus",
    read_mode      : "read",
    shortcuts      : "shortcuts",
    browser_action : "browser_action",
    browser_click  : "browser_click",
    tab_selected   : "tab_selected",
    new_tab        : "new_tab",
    menu           : "menu",
    updated        : "updated",
    save_verify    : "save_verify",
    // about export and auth
    auth           : "auth",
    auth_success   : "auth_success",
    export         : "export",
    redirect_uri   : "redirect_uri",
};

/**
 * Add message object
 * 
 * @param {string} @see action
 * @param {object} { code,url }
 */
function add( type, value = {} ) {
    return { type, value };
}

export {
    add    as Add,
    action as MESSAGE_ACTION
}