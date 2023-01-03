const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    //DATA INSERT
    //New guest registration
    insert_data: (data) => ipcRenderer.send('insert_data', data),

    //Reassign guest
    reassign_guest:(data) => ipcRenderer.send('reassign_guest', data),


    //Quick Searchy
    //By name
    search_by_name: (data) => ipcRenderer.send('search_by_name', data),
    search_by_name_return: (data) => ipcRenderer.on("search_by_name_return", data).setMaxListeners(100),
    //By doc
    search_by_doc: (data) => ipcRenderer.send('search_by_doc', data),
    search_by_doc_return: (data) => ipcRenderer.on('search_by_doc', data).setMaxListeners(100),


    //Date Picker
    //Search by Month
    //Jan
    search_by_month_jan: (data) => ipcRenderer.send('jan', data),
    search_by_month_jan_return: (data) => ipcRenderer.on('jan_return', data),
    //Feb
    search_by_month_feb: (data) => ipcRenderer.send('feb', data),
    search_by_month_feb_return: (data) => ipcRenderer.on('feb_return', data),
    //Mar
    search_by_month_mar: (data) => ipcRenderer.send('mar', data),
    search_by_month_mar_return: (data) => ipcRenderer.on('mar_return', data),
    //Apr
    search_by_month_apr: (data) => ipcRenderer.send('apr', data),
    search_by_month_apr_return: (data) => ipcRenderer.on('apr_return', data),
    //May
    search_by_month_may: (data) => ipcRenderer.send('may', data),
    search_by_month_may_return: (data) => ipcRenderer.on('may_return', data),
    //Jun
    search_by_month_jun: (data) => ipcRenderer.send('jun', data),
    search_by_month_jun_return: (data) => ipcRenderer.on('jun_return', data),
    //Jul
    search_by_month_jul: (data) => ipcRenderer.send('jul', data),
    search_by_month_jul_return: (data) => ipcRenderer.on('jul_return', data),
    //Ago
    search_by_month_ago: (data) => ipcRenderer.send('ago', data),
    search_by_month_ago_return: (data) => ipcRenderer.on('ago_return', data),
    //Sep
    search_by_month_sep: (data) => ipcRenderer.send('set', data),
    search_by_month_sep_return: (data) => ipcRenderer.on('set_return', data),
    //Oct
    search_by_month_out: (data) => ipcRenderer.send('out', data),
    search_by_month_out_return: (data) => ipcRenderer.on('out_return', data),
    //Nov
    search_by_month_nov: (data) => ipcRenderer.send('nov', data),
    search_by_month_nov_return: (data) => ipcRenderer.on('nov_return', data),
    //Dex
    search_by_month_dez: (data) => ipcRenderer.send('dez', data),
    search_by_month_dez_return: (data) => ipcRenderer.on('dez_return', data),


    // STATISTICS
    //Entries today
    today_entries_call: (data) => ipcRenderer.send('today_entries_call', data),
    today_entries_return: (data) => ipcRenderer.on('today_entries_return', data),
 
    //Entries this month
    month_entries_call: (data) => ipcRenderer.send('month_entries_call', data),
    month_entries_return: (data) => ipcRenderer.on('month_entries_return', data),

    //All entries
    all_data_call: (data) => ipcRenderer.send('all_data_call', data),
    all_data_return: (data) => ipcRenderer.on('all_data_return', data),
})

