const TASK_NOTES_FOLDER_ID = '11761DZMMmHJq4vYh-fB5JYGYNI8WPaAz'

function onOpen() {
  DocumentApp.getUi()
    .createMenu('Harvey')
    .addItem('Create Task Doc', 'handleCreateTaskDoc')
    .addToUi()
}

function handleCreateTaskDoc() {
  // https://developers.google.com/apps-script/reference/document/document
  const doc = DocumentApp.getActiveDocument()
  const ui = DocumentApp.getUi()

  // https://developers.google.com/apps-script/reference/document/range
  const selection = doc.getSelection()
  if (!selection) {
    ui.alert('I need a selection')
    return
  }

  // https://developers.google.com/apps-script/reference/document/range
  const elements = selection.getRangeElements()

  if (elements.length > 1) {
    ui.alert(
      `${elements.length} elements are selected. I don't know what to do here yet.`
    )
    return
  }
  const selectedText = elements[0].getElement().asText().getText()
  const newDocName = `[task] ${selectedText}`

  const existing = DriveApp.getFilesByName(newDocName)

  //   const destFolder = DriveApp.getFolderById(TASK_NOTES_FOLDER_ID)

  //   const newDoc = DocumentApp.create()
  //   DriveApp.getFileById(newDoc.getId()).moveTo(destFolder)
}
