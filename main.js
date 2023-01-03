const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
var Datastore = require('nedb');
//const { findSourceMap } = require('module');
//const { log } = require('console');
var db = new Datastore({ filename: './path/to/db.db' });
db.loadDatabase();
const date = new Date()
const date_day = date.getDate()
const date_month = date.getMonth()
const date_month_edited = date.getMonth() + 1
const date_year = date.getFullYear()
const array_meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
var dayEntriesSample = { data: `${date_day}/${date_month_edited}/${date_year}` }
var monthEntriesSample = { mes: array_meses[date_month] }

//=======================================================================


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
 //win.webContents.openDevTools()


  // =========== REGISTRATION INTERFACE =========//
  //Obj coming from registration form
  ipcMain.on('insert_data', (event, data) => {
    db.insert(data)
  })

  //Reassing of guests
  ipcMain.on('reassign_guest', (event, data) => {
    db.insert(data)
  })



  // ============ SEARCH INTERFACE =============//
  //QUICK SEARCH
  //By name
  ipcMain.on('search_by_name', (event, data) => {
    function search_by_name() {
      const obj = data
      const name = obj.name
      obj.name = new RegExp(name)
      db.find(obj, (err, data) => {
        if (data) {
          win.webContents.send("search_by_name_return", data)
        }
      })
    }
    search_by_name()
  })

  //By doc
  ipcMain.on('search_by_doc', (event, data) => {
    function search_by_doc() {
      const obj = data
      const documento = obj.documento
      console.log(documento);
      obj.documento = new RegExp(documento)
      db.find(obj, (err, data) => {
        if (data) {
          win.webContents.send("search_by_doc", data)
        }
      })
    }
    search_by_doc()
  })


  //SEARCH BY MONTH
  //January
  ipcMain.on('jan', (event, data) => {
    function jan() {
      db.find({ mes: "janeiro" }, (err, data) => {
        win.webContents.send('jan_return', data)
      })
    }
    jan()
  })

  //Febuary
  ipcMain.on('feb', (event, data) => {
    function feb() {
      db.find({ mes: "fevereiro" }, (err, data) => {
        win.webContents.send('feb_return', data)
      })
    }
    feb()
  })

  //March
  ipcMain.on('mar', (event, data) => {
    function mar() {
      db.find({ mes: "março" }, (err, data) => {
        win.webContents.send('mar_return', data)
      })
    }
    mar()
  })

  //April
  ipcMain.on('apr', (event, data) => {
    function apr() {
      db.find({ mes: "abril" }, (err, data) => {
        win.webContents.send('apr_return', data)
      })
    }
    apr()
  })

  //May
  ipcMain.on('may', (event, data) => {
    function may() {
      db.find({ mes: "maio" }, (err, data) => {
        win.webContents.send('may_return', data)
      })
    }
    may()
  })

  //June
  ipcMain.on('jun', (event, data) => {
    function jun() {
      db.find({ mes: "junho" }, (err, data) => {
        win.webContents.send('jun_return', data)
      })
    }
    jun()
  })

  //July
  ipcMain.on('set', (event, data) => {
    function jul() {
      db.find({ mes: "julho" }, (err, data) => {
        win.webContents.send('jul_return', data)
      })
    }
    jul()
  })

  //Agoust
  ipcMain.on('ago', (event, data) => {
    function ago() {
      db.find({ mes: "agosto" }, (err, data) => {
        win.webContents.send('ago_return', data)
      })
    }
    ago()
  })

  //September
  ipcMain.on('set', (event, data) => {
    function sep() {
      db.find({ mes: "setembro" }, (err, data) => {
        win.webContents.send('set_return', data)
      })
    }
    sep()
  })

  //Octuber
  ipcMain.on('out', (event, data) => {
    function oct() {
      db.find({ mes: "outubro" }, (err, data) => {
        win.webContents.send('out_return', data)
      })
    }
    oct()
  })

  //November
  ipcMain.on('nov', (event, data) => {
    function nov() {
      db.find({ mes: "novembro" }, (err, data) => {
        win.webContents.send('nov_return', data)
      })
    }
    nov()
  })

  //Dezember
  ipcMain.on('dez', (event, data) => {
    function dez() {
      db.find({ mes: "dezembro" }, (err, data) => {
        win.webContents.send('dez_return', data)
      })
    }
    dez()
  })



  // ========= STATISTICS =============//
  //Today entries
  ipcMain.on('today_entries_call', (event, dat) => {
    const obj = dat
    const data = obj.data
    obj.data = new RegExp(data)
    db.find(obj, (err, data) => {
      win.webContents.send('today_entries_return', data)
    });
  })

  //Month entries
  ipcMain.on('month_entries_call', (event, data) => {
    function month_entries_return() {
      const obj = data
      const mes = obj.mes
      obj.mes = new RegExp(mes)
      db.find(obj, (err, data) => {
        win.webContents.send('month_entries_return', data)
      });
    }
    month_entries_return()
  })

  //All entries
  ipcMain.on('all_data_call', (event, data) => {
    function all_data_return() {
      db.find({}, (err, data) => {
        win.webContents.send('all_data_return', data)
      });
    }
    all_data_return()
  })
  //===========================================//


  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

