//================= LOGIN INTERFACE VARIABLES========================//
/* const login_screen = document.querySelector('.login-screen')
const login_container = document.querySelector('.login-container')
const login_btn_guest = document.querySelector('.visitante')
const login_btn_service = document.querySelector('.funcionario')
const login_user = document.querySelector('#login_user').value
const login_password = document.querySelector('#login_password').value
const header_login_btn = document.querySelector('.header-login-container')
const header_login_user_name = document.querySelector('.header_login_user_name') */

//===============MAIN INTERFACE ========================//
const main_interface = document.querySelector('.main-interface')

//===============REGISTRATION INTERFACE VARIABLES ========================//
const main_container = document.querySelector('.main-container')
const left_menu = document.querySelector('.left-menu')
const input_nome = document.querySelector('#input-nome')
const input_documento = document.querySelector('#input-documento')
const input_andar = document.querySelector('#input-andar')
const options_container = document.querySelector('.options_container')
const options = document.querySelectorAll('.option')
const selecione_aqui = document.querySelector('.selecione_aqui')
const cadastro_warning = document.querySelector('.cadastro-warning-hide')
const btn_register = document.querySelector('#btn_cadastrar')
const btn_unavailable = document.querySelector('.btn_unavailable')
const clear_inputs = document.querySelector('#limpar-dados')
const pagina_cadastro = document.querySelector('.pagina-cadastro')
const btn_buscar_visitante = document.querySelector('#btn-buscar-visitante')
const icon_buscar_visitante = document.querySelector('.icon-buscar-visitante')
const btn_buscar_visitante_text = document.querySelector('.btn-buscar-visitante-text')
const pop_up_confirmation = document.querySelector('.confirm-registration-screen')
const pop_up_btn_confirm = document.querySelector('#btn-confirmar')
const pop_up_btn_cancel = document.querySelector('#btn-cancelar')
const confirm_name = document.querySelector('#confirm_name')
const confirm_doc = document.querySelector('#confirm_doc')
const confirm_floor = document.querySelector('#confirm_floor')

//===================  SEARCH INTERFACE VARIABLES ======================//
//'QUICK SEARCH'
const search_by_name = document.querySelector('#pesquisar-por-nome')
const search_by_doc = document.querySelector('#pesquisar-por-documento')
const previous_month = document.querySelector('#anterior')
const next_month = document.querySelector('#proximo')
const dias = document.querySelectorAll('.dia')
const search = document.querySelector('#procurar')
const nada_encontrado = document.querySelector('.nada-encontrado')
const array_meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

//'TABLE TO BE SHOWN WITH DATA'
const colunas_container = document.querySelector('.colunas-container')
const col = document.querySelectorAll('#col')
const col_data = document.querySelector('.output-col-data')
const col_hora = document.querySelector('.output-col-hora')
const col_nome = document.querySelector('.output-col-nome')
const col_doc = document.querySelector('.output-col-documento')
const col_andar = document.querySelector('.output-col-andar')
const col_visita = document.querySelector('.output-col-visita')
const col_dia = document.querySelector('.output-col-dia')
const date = new Date()
const date_year = date.getFullYear()
const date_month = date.getMonth()
const date_month_edited = date.getMonth() + 1
const date_day = date.getDate()
const date_hour = date.getHours()
const date_min = date.getMinutes()
const hora_atual = date_hour + ':' + date_min
const data_atual = date_day + '/' + date_month_edited + '/' + date_year
const dp_mes = document.querySelector('#dp_mes')
const re_pop_up_confirmation = document.querySelector('.confirm-re-registration-screen')
const re_confirm_name = document.querySelector('#re_confirm_name')
const re_confirm_doc = document.querySelector('#re_confirm_doc')
const re_confirm_floor = document.querySelector('#re_confirm_floor')
const re_pop_up_btn_confirm = document.querySelector('#re_btn_confirmar')
const re_pop_up_btn_cancel = document.querySelector('#re_btn_cancelar')


//STATISTIC INTERFACE variables
const statistic_today = document.querySelector('#statistic_today')
const statistic_month = document.querySelector('#statistic_month')
const statistic_total = document.querySelector('#statistic_total')
const statistic_line = document.querySelectorAll('.statistic_line')
const clean_columns = document.querySelector('#btn_clean_columns')

var mes_value = date_month_edited
var m = date_month
var current_month = date_month
var text = ''
var month = ''
var x = true
var row_id = 0//deletar
var row_total = ''
var row_array_filter = []
var row_cols_data = []
var obj_re_entry = {
    data: '',
    hora: '',
    name: '',
    documento: '',
    andar: '',
    tipo_visita: '',
    mes: '',
    dia: ''
}
var guest_control = false

window.electronAPI.search_by_month_jan()
window.electronAPI.search_by_month_feb()
window.electronAPI.search_by_month_mar()
window.electronAPI.search_by_month_apr()
window.electronAPI.search_by_month_may()
window.electronAPI.search_by_month_jun()
window.electronAPI.search_by_month_jul()
window.electronAPI.search_by_month_ago()
window.electronAPI.search_by_month_sep()
window.electronAPI.search_by_month_out()
window.electronAPI.search_by_month_nov()
window.electronAPI.search_by_month_dez()


const jan = window.electronAPI.jan
const fev = window.electronAPI.fev
const mar = window.electronAPI.mar
const apr = window.electronAPI.apr
const jun = window.electronAPI.jun
const jul = window.electronAPI.jul
const ago = window.electronAPI.ago
const set = window.electronAPI.set
const out = window.electronAPI.out
const nov = window.electronAPI.nov
const dez = window.electronAPI.dez

var jan_data = ''
var feb_data = ''
var mar_data = ''
var apr_data = ''
var may_data = ''
var jun_data = ''
var jul_data = ''
var ago_data = ''
var sep_data = ''
var out_data = ''
var nov_data = ''
var dez_data = ''
var quick_search_name = ''
var quick_search_doc = ''


//=========== QUICK SEARCH
//By name
window.electronAPI.search_by_name_return((event, data) => {
    quick_search_name = data
})

//By doc
window.electronAPI.search_by_doc_return((event, data) => {
    quick_search_doc = data
})


//=========== SEARCH BY DATE
//Jan
window.electronAPI.search_by_month_jan_return((event, data) => {
    if (data) {
        jan_data = data
    }
})

//Feb
window.electronAPI.search_by_month_feb_return((event, data) => {
    if (data) {
        feb_data = data
    }
})

//March
window.electronAPI.search_by_month_mar_return((event, data) => {
    if (data) {
        mar_data = data
    }
})

//Apr
window.electronAPI.search_by_month_apr_return((event, data) => {
    if (data) {
        apr_data = data
    }
})

//May
window.electronAPI.search_by_month_may_return((event, data) => {
    if (data) {
        may_data = data
    }
})

//Jun
window.electronAPI.search_by_month_jun_return((event, data) => {
    if (data) {
        jun_data = data
    }
})

//Jul
window.electronAPI.search_by_month_jul_return((event, data) => {
    if (data) {
        jul_data = data
    }
})

//Ago
window.electronAPI.search_by_month_ago_return((event, data) => {
    if (data) {
        ago_data = data
    }
})

//Sep
window.electronAPI.search_by_month_sep_return((event, data) => {
    if (data) {
        sep_data = data
    }
})

//Out
window.electronAPI.search_by_month_out_return((event, data) => {
    if (data) {
        out_data = data
    }
})

//Nov
window.electronAPI.search_by_month_nov_return((event, data) => {
    if (data) {
        nov_data = data
    }
})

//Dez
window.electronAPI.search_by_month_dez_return((event, data) => {
    if (data) {
        dez_data = data
    }
})

//================== STATISTICS ===============================






/* 
//========== LOGIN INTERFACE ===============================//
//Guest
login_btn_guest.addEventListener('click', () => {
    main_interface.style.display = 'flex'
    login_screen.style.display = 'none'
    login_container.classList.add('login-container-hide')
    btn_register.style.display = 'none'
    header_login_user_name.textContent = 'Logar'
})
//Service
login_btn_service.addEventListener('click', () => {
    const login_user = document.querySelector('#login_user').value
    const login_password = document.querySelector('#login_password').value
    if (login_user == '' && login_password == '') {
        main_interface.style.display = 'flex'
        guest_control = true
        btn_register.style.display = 'flex'
        login_screen.style.display = 'none'
        login_container.style.display = 'none'
        btn_unavailable.style.display = 'none'
        header_login_user_name.textContent = 'User'
    } else {
        main_interface.style.display = 'flex'
        guest_control = false
        btn_unavailable.classList.add('btn_unavailable')
        alert('tente novamente')
    }
})
//Header btn login 
//Reloads page for a new login
header_login_btn.addEventListener('click', () => {
    window.location.reload()

}) */




//=============== HEADER ==============================================//
const header_hour = document.querySelector('#header-hour')
setInterval(() => {
    header_hour.textContent = `${date_hour}:${date_min}`
}, 1000)


//=============== REGISTRATION INTERFACE ================================//

//Clears input values
clear_inputs.addEventListener('click', () => {
    input_nome.value = ''
    input_documento.value = ''
    input_andar.value = ''

})
//If inputs are filled, opens up screen for registration
btn_register.addEventListener('click', () => {
    //Validação do formulário
    if (input_nome.value && input_documento.value && input_andar.value != '') {
        cadastro_warning.classList.remove('cadastro-warning-show')

        //Shows confirm registration screen
        pop_up_confirmation.classList.remove('confirm-registration-screen')
        pop_up_confirmation.classList.add('confirm-registration-screen-on')

        //Adds info to confim registration screen
        confirm_name.textContent = input_nome.value
        confirm_doc.textContent = input_documento.value
        confirm_floor.textContent = input_andar.value
    } else {
        cadastro_warning.classList.add('cadastro-warning-show')
    }

})
//Confirm btn - Triggers 'saveToDataBase' function
pop_up_btn_confirm.addEventListener('click', () => {
    pop_up_confirmation.classList.remove('confirm-registration-screen-on')
    pop_up_confirmation.classList.add('confirm-registration-screen')
    saveToDatabase()
    reloadStatistics()
})

//Cancel btn
pop_up_btn_cancel.addEventListener('click', () => {
    pop_up_confirmation.classList.remove('confirm-registration-screen-on')
    pop_up_confirmation.classList.add('confirm-registration-screen')
})


//HTML - select 'tipo de visita'
options_container.addEventListener('click', ()=>{
    options_container.classList.toggle('options_container-on')
    selecione_aqui.classList.toggle('selecione_aqui-hide')
    for (let i = 0;i< options.length; i++){
        options[i].classList.toggle('option-on')
    }
}) 
var visita_selecionada 
const visit_purpose_promise = new Promise((resolve, reject) =>{
    for (let i = 0;i< options.length; i++){
        options[i].addEventListener('click', (e)=>{
            visita_selecionada = e.target.value
            resolve(visita_selecionada)
        })
    
    }
})



//This function creates an object with guest's data and save it in the backend
//and saves it in the database
async function saveToDatabase() {
    const name = input_nome.value
    const document = input_documento.value
    const floor = input_andar.value

    visit_purpose_promise.then((data) =>{
        visita_selecionada = data
    })

    //Atribui a string do mês para ser salva no banco de dados
    if (date_month == 0) {
        month = "janeiro"
    } else if (date_month == 1) {
        month = "fevereiro"
    } else if (date_month == 2) {
        month = "março"
    } else if (date_month == 3) {
        month = "abril"
    } else if (date_month == 4) {
        month = "maio"
    } else if (date_month == 5) {
        month = "junho"
    } else if (date_month == 6) {
        month = "julho"
    } else if (date_month == 7) {
        month = "agosto"
    } else if (date_month == 8) {
        month = "setembro"
    } else if (date_month == 9) {
        month = 'outubro'
    } else if (date_month == 10) {
        month = "novembro"
    } else if (date_month == 11) {
        month = "dezembro"
    }

    const data = {
        data: data_atual,
        hora: hora_atual,
        name: name,
        documento: document,
        andar: floor,
        tipo_visita: visita_selecionada,
        mes: month, 
        dia: date_day 
    }

    window.electronAPI.insert_data(data)
    visita_selecionada = ''
    setTimeout(reloadStatistics, 1000)
}



//=============== SEARCH INTERFACE ================================//
//HTML - 'Quick search'
//Quick search by name
search_by_name.addEventListener('keydown', (e) => {
    nada_encontrado.style.display = 'none'
    if (e.key == "Backspace") {
        text = ''
        search_by_name.value = ''
        limpaColunas()
    } else {
        text += e.key
        limpaColunas()// cada vez que digitar letra
        search_byName_saveData()
        search_byName_dataReturn()
    }

})
//These two functios are called at the same time above
async function search_byName_saveData() {
    let obj = { name: text }
    window.electronAPI.search_by_name(obj)
}
async function search_byName_dataReturn() {
    returnDataFromMonth(quick_search_name)
}


//Quick search by doc
search_by_doc.addEventListener('keydown', (e) => {
    nada_encontrado.style.display = 'none'
    if (e.key == "Backspace") {
        text = ''
        search_by_doc.textContent = ''
        limpaColunas()
    } else {
        text += e.key
        limpaColunas()// cada vez que digitar letra
        search_byDoc_saveData()
        search_byDoc_dataReturn()
    }
})
//Sends
async function search_byDoc_saveData() {
    let obj = { documento: text }
    window.electronAPI.search_by_doc(obj)
}
//Returns
async function search_byDoc_dataReturn() {
    returnDataFromMonth(quick_search_doc)
}


//HTML - 'Search by date ( Date Picker )'
/*This function inserts the current month in the Date Picker*/
function insertCurrentMonth() {
    if (date_month == 0) {
        month = "janeiro"
    } else if (date_month == 1) {
        month = "fevereiro"
    } else if (date_month == 2) {
        month = "março"
    } else if (date_month == 3) {
        month = "abril"
    } else if (date_month == 4) {
        month = "maio"
    } else if (date_month == 5) {
        month = "junho"
    } else if (date_month == 6) {
        month = "julho"
    } else if (date_month == 7) {
        month = "agosto"
    } else if (date_month == 8) {
        month = "setembro"
    } else if (date_month == 9) {
        month = 'outubro'
    } else if (date_month == 10) {
        month = "novembro"
    } else if (date_month == 11) {
        month = "dezembro"
    }
    dp_mes.textContent = month
}
insertCurrentMonth()
// Date picker arrow previus month
previous_month.addEventListener('click', () => {
    if (m == 0) {
        m = m
        dp_mes.textContent = array_meses[m]
    } else {
        m = m - 1
        dp_mes.textContent = array_meses[m]
        mes_value = m
    }
})
// Date picker arrow next month
next_month.addEventListener('click', () => {
    if (m == 11) {
        m = m
        dp_mes.textContent = array_meses[m]
    } else {
        m = m + 1
        dp_mes.textContent = array_meses[m]
        mes_value = m
    }
})
//HTML - 'Search button'
search.addEventListener('click', () => {
    nada_encontrado.style.display = 'none'
    //Janeiro
    if (m == 0) {//Returns choosen day within 'Janeiro' month
        async function getJaneiro() {
            if (dia_selecionado == "todos") {
                limpaColunas()
                window.electronAPI.search_by_month_jan()
                returnDataFromMonth(jan_data)
            } else {
                window.electronAPI.search_by_month_jan()
                const day = jan_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getJaneiro()

        //Fevereiro
    } else if (m == 1) {
        async function getFevereiro() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_feb()
                returnDataFromMonth(feb_data)
            } else {
                window.electronAPI.search_by_month_feb()
                const day = feb_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getFevereiro()
        //Março
    } else if (m == 2) {
        async function getMarço() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_mar()
                returnDataFromMonth(mar_data)
            } else {
                window.electronAPI.search_by_month_mar()
                const day = mar_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getMarço()
        //Abril
    } else if (m == 3) {
        async function getAbril() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_apr()
                returnDataFromMonth(apr_data)
            } else {
                window.electronAPI.search_by_month_apr()
                const day = apr_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)

            }
        }
        getAbril()
        //Maio
    } else if (m == 4) {
        async function getMaio() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_may()
                returnDataFromMonth(may_data)
            } else {
                window.electronAPI.search_by_month_may()
                const day = may_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)

            }
        }
        getMaio()
        //Junho
    } else if (m == 5) {
        async function getJunho() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_jun()
                returnDataFromMonth(jun_data)
            } else {
                window.electronAPI.search_by_month_jun()
                const day = jun_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getJunho()
        //Julho
    } else if (m == 6) {
        async function getJulho() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_jul()
                returnDataFromMonth(jul_data)
            } else {
                window.electronAPI.search_by_month_jul()
                const day = jul_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getJulho()
        //Agosto
    } else if (m == 7) {
        async function getAgosto() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_ago()
                returnDataFromMonth(ago_data)
            } else {
                window.electronAPI.search_by_month_ago()
                const day = ago_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getAgosto()
        //Setembro
    } else if (m == 8) {
        async function getSetembro() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_sep()
                returnDataFromMonth(sep_data)
            } else {
                window.electronAPI.search_by_month_sep()
                const day = sep_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getSetembro()
        //Outubro
    } else if (m == 9) {
        async function getOutubro() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_out()
                returnDataFromMonth(out_data)
            } else {
                window.electronAPI.search_by_month_out()
                const day = out_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getOutubro()
        //Novembro
    } else if (m == 10) {
        async function getNovembro() {
            if (dia_selecionado == "todos") {
                //Limpa colunas e adiciona novos dados
                limpaColunas()
                window.electronAPI.search_by_month_nov()
                returnDataFromMonth(nov_data)
            } else {
                window.electronAPI.search_by_month_nov()
                const day = nov_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getNovembro()
        //Dezembro
    } else if (m == 11) {
        async function getDezembro() {
            if (dia_selecionado == "todos") {
                limpaColunas()
                window.electronAPI.search_by_month_dez()
                returnDataFromMonth(dez_data)
            } else {
                //Consertar aqui
                window.electronAPI.search_by_month_dez()
                const day = dez_data.filter(x => {
                    return x.dia == dia_selecionado
                })
                limpaColunas()
                returnDataFromDay(day)
            }
        }
        getDezembro()
    }
})








//================= DATA RETURN FROM BACKEND ====================//

//When called, creates table and inserts data within it
//from a single day of the month
function returnDataFromDay(data) {
    if (data.length == 0) {
        nada_encontrado.style.display = 'flex'
    } else {
        for (i of data) {
            const visitante_data = i.data
            const visitante_hora = i.hora
            const visitante_nome = i.name
            const visitante_doc = i.documento
            const visitante_andar = i.andar
            const tipoVisita = i.tipo_visita
            row = document.createElement('div')
            row.classList.add('row')
            data_div = document.createElement('div')
            data_div.classList.add('row-col')
            hora_div = document.createElement('div')
            hora_div.classList.add('row-col')
            nome_div = document.createElement('div')
            nome_div.classList.add('row-col')
            doc_div = document.createElement('div')
            doc_div.classList.add('row-col')
            andar_div = document.createElement('div')
            andar_div.classList.add('row-col')
            tipo_visita_div = document.createElement('div')
            tipo_visita_div.classList.add('row-col')
            tipo_visita_div.style.width = '180px'
            cadastrar_novamente = document.createElement('div')
            if (guest_control == true) {
                cadastrar_novamente.textContent = 'NOVO CADASTRO'
                cadastrar_novamente.classList.add('cadastrar-novamente')
            }
            cadastrar_novamente.setAttribute('id', row_id)
            data_div.textContent = visitante_data
            hora_div.textContent = visitante_hora
            nome_div.textContent = visitante_nome
            doc_div.textContent = visitante_doc
            andar_div.textContent = visitante_andar
            tipo_visita_div.textContent = tipoVisita
            row.appendChild(data_div)
            row.appendChild(hora_div)
            row.appendChild(nome_div)
            row.appendChild(doc_div)
            row.appendChild(andar_div)
            row.appendChild(tipo_visita_div)
            row.appendChild(cadastrar_novamente)
            colunas_container.appendChild(row)
            colunas_container.appendChild(row)
            limpa_colunas_control = false
        }
        //Green 'new register' btn on tables for re registration
        let row_total = document.querySelectorAll('.row')
        for (let i = 0; i < row_total.length; i++) {
            row_total[i].addEventListener('click', () => {
                if (guest_control == true) {
                    row_array_filter = []
                    row_cols_data = []
                    row_array_filter.push(row_total[i].childNodes)
                    for (data of row_array_filter[0]) {
                        row_cols_data.push(data.innerHTML)
                    }
                    //fills re registration screen with choosen values
                    re_confirm_name.textContent = row_cols_data[2]
                    re_confirm_doc.textContent = row_cols_data[3]
                    re_confirm_floor.textContent = row_cols_data[4]
                    //Shows re registration confirm screen
                    re_pop_up_confirmation.classList.remove('confirm-re-registration-screen')
                    re_pop_up_confirmation.classList.add('confirm-re-registration-screen-on')
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }
            })
        }
    }
}

//When called, creates table and inserts data within it from
//all days of a choosen month
function returnDataFromMonth(data) {
    if (data.length == 0) {
        nada_encontrado.style.display = 'flex'
    } else {
        //Retorna banco completp com todos meses
        for (i of data) {
            row_id++//deletar
            const visitante_data = i.data
            const visitante_hora = i.hora
            const visitante_nome = i.name
            const visitante_doc = i.documento
            const visitante_andar = i.andar
            const tipoVisita = i.tipo_visita
            row = document.createElement('div')
            row.classList.add('row')
            data_div = document.createElement('div')
            data_div.classList.add('row-col')
            hora_div = document.createElement('div')
            hora_div.classList.add('row-col')
            nome_div = document.createElement('div')
            nome_div.classList.add('row-col')
            doc_div = document.createElement('div')
            doc_div.classList.add('row-col')
            andar_div = document.createElement('div')
            andar_div.classList.add('row-col')
            tipo_visita_div = document.createElement('div')
            tipo_visita_div.classList.add('row-col')
            tipo_visita_div.style.width = '180px'
            cadastrar_novamente = document.createElement('div')
            if (guest_control == true) {
                cadastrar_novamente.textContent = 'NOVO CADASTRO'
                cadastrar_novamente.classList.add('cadastrar-novamente')
            }
            cadastrar_novamente.setAttribute('id', row_id)
            data_div.textContent = visitante_data
            hora_div.textContent = visitante_hora
            nome_div.textContent = visitante_nome
            doc_div.textContent = visitante_doc
            andar_div.textContent = visitante_andar
            tipo_visita_div.textContent = tipoVisita
            row.appendChild(data_div)
            row.appendChild(hora_div)
            row.appendChild(nome_div)
            row.appendChild(doc_div)
            row.appendChild(andar_div)
            row.appendChild(tipo_visita_div)
            row.appendChild(cadastrar_novamente)
            colunas_container.appendChild(row)
            limpa_colunas_control = false
        }
        //Re entry of some chosen guest
        let row_total = document.querySelectorAll('.row')
        for (let i = 0; i < row_total.length; i++) {
            row_total[i].addEventListener('click', () => {
                if (guest_control == true) {
                    row_array_filter = []
                    row_cols_data = []
                    row_array_filter.push(row_total[i].childNodes)

                    for (data of row_array_filter[0]) {
                        row_cols_data.push(data.innerHTML)
                    }
                    //fills re registration screen with choosen values
                    re_confirm_name.textContent = row_cols_data[2]
                    re_confirm_doc.textContent = row_cols_data[3]
                    re_confirm_floor.textContent = row_cols_data[4]

                    //Shows re registration confirm screen
                    re_pop_up_confirmation.classList.remove('confirm-re-registration-screen')
                    re_pop_up_confirmation.classList.add('confirm-re-registration-screen-on')
                    re_pop_up_confirmation.classList.remove('confirm-re-registration-screen')
                    re_pop_up_confirmation.classList.add('confirm-re-registration-screen-on')
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }
            })
        }
    }
}






//============= REASSIGN GUEST =================================//

//Registrar user again
re_pop_up_btn_confirm.addEventListener('click', () => {
    reAssignGuest()
})
//Cancels re registration
re_pop_up_btn_cancel.addEventListener('click', (e) => {
    re_pop_up_confirmation.classList.remove('confirm-re-registration-screen-on')
    re_pop_up_confirmation.classList.add('confirm-re-registration-screen')
})

// This function register again some user choosen in
// the table. It's useful if someone is already registered
// so they don't need to be registered again step by step
async function reAssignGuest() {
    re_pop_up_confirmation.classList.remove('confirm-re-registration-screen-on')
    re_pop_up_confirmation.classList.add('confirm-re-registration-screen')

    const obj = {
        data: data_atual,
        hora: hora_atual,
        name: row_cols_data[2],
        documento: row_cols_data[3],
        andar: row_cols_data[4],
        tipo_visita: row_cols_data[5],
        mes: month,
        dia: date_day
    }
    window.electronAPI.reassign_guest(obj)
    setTimeout(reloadStatistics, 1000)
}






//================== STATISTIC INTERFACE =======================//

//HTML - 'Statistics screen'
//Filters and fetches entries of current month in the database
//By sending to the server an object
//that matches what i'm looking for





//Loads statistics in the inicialization
function loadStatistics() {
    //Today entries
    window.electronAPI.today_entries_call({ data: data_atual })
    window.electronAPI.today_entries_return((event, data) => {
        statistic_today.innerHTML = data.length
    })

    //Month entries
    window.electronAPI.month_entries_call({ mes: array_meses[current_month] })
    window.electronAPI.month_entries_return((event, data) => {
        statistic_month.textContent = data.length
    })

    //All entries
    window.electronAPI.all_data_call()
    window.electronAPI.all_data_return((event, data) => {
        statistic_total.textContent = data.length
    })
}
loadStatistics()

//Provides animation to statistic screen when succesful registration
function reloadStatistics() {
    for (let i = 0; i < statistic_line.length; i++) {
        statistic_line[i].style.backgroundColor = 'green'
        setTimeout(() => {
            statistic_line[i].style.backgroundColor = 'transparent'
            setTimeout(() => {
                loadStatistics()
            }, 500)
        }, 1300)
    }
}





//================== CLEAN/RESET INTERFACES =================//

//When called, clears cols data so a new search can be done
var limpa_colunas_control = true
function limpaColunas() {
    let row_total = document.querySelectorAll('.row')
    if (limpa_colunas_control != true) {
        for (let i = 0; i < row_total.length; i++) {
            colunas_container.removeChild(row_total[i])
        }
    }
}

//This function cleans up previous button clicked
// and restores it to its original style
function clean_backgroundd() {
    for (i of dias) {
        i.style.backgroundColor = '#2C2C2C'
        i.style.color = 'white'
    }
}

//HTML - This forloop runs through every day buttons
// and controls their style when user clicks over them
var dia_selecionado = 0
for (let i = 0; i < dias.length; i++) {
    dias[i].addEventListener('click', (e) => {
        dia_selecionado = e.target.innerHTML
        clean_backgroundd()
        dias[i].style.backgroundColor = 'black'
        dias[i].style.color = 'gray'
    })
}

clean_columns.addEventListener('click', () => {
    limpaColunas()
})