const create_element = (type,obj) => {
    let elem = document.createElement(type)
    console.log(obj)
    for (let [key, value] of Object.entries(obj)) {
        console.log(key, value)
        elem[`${key}`] = value
    }
    return elem
}

const input_form = (i) => {
    return `<div class="col-sm-12">
<center class="text-center">Team Member ${i + 3}</center>
<div class = "div1">
<div class="col-sm-12">
    <div class="form-group">
        <div class="form-row">
            <input type="text" required placeholder="Name / பெயர் " name="name${i+3}" class="form-control"/>
        </div>
    </div>
    <div class="form-group">
        <select required name="profession${i+3}" class="form-control">
            <option value="">----- Profession -----</option>
            <option value="Student">Student</option>
            <option value="Working">Working</option>
        </select>
    </div>
    <div class="form-group">
        <input required name="collegeworkstationname${i+3}" type="text" placeholder="College/Workstation Name" />
    </div>
    <div class="form-group">
        <input required name="email${i+3}" type="email" placeholder="Email/மின்னஞ்சல் முகவரி " />
    </div>
    <div class="form-group">
        <input required name="phone${i+3}" type="text" placeholder="Phone Number" />
    </div>
</div>
</div>
</div>
`}


const handle_team_change = (event) => {

    let target_div = document.querySelector("#myhtml")
    target_div.innerHTML = ""
    let no_of_objects = event.target.value

    for (let i = 0; i < no_of_objects - 1; i++) {
        let div_elem = create_element('div', { 'id': `team_${i}`, 'className': 'team_div col-sm-12' })
        // // div_elem.style.height = "200px"
        // // div_elem.style['z-index'] = '100'
        console.log(div_elem)
        div_elem.innerHTML = input_form(i)
        target_div.innerHTML += input_form(i)
        console.log("here...")
    }
}


$("#login-form").submit(function (e) {
    e.preventDefault()

    // document.getElementById("submit_btn").disabled = true
    // document.getElementById("submit_btn").classList.add("disabled")
    const Submit_btn = document.getElementById("submit_btn")
    Submit_btn.value = "Wait... "
    Submit_btn.disabled = true
    Submit_btn.classList.add("disabled̥")
    // $("#alert_resp_box").show()
    let form_data = new FormData(document.querySelector("#login-form"))

    fetch("https://script.google.com/macros/s/AKfycbw9mIxrlQ3_nCG_tPuLbVzpPAkp9mK238xr3dEGqXVG7XhhsUsm/exec", {
        method: "POST",
        body: form_data
    }).then(response => {
        return response.json()
    }).then(json_response => {
        if (json_response.result == "success") {
            swal("Good Job !", "Check your Email & join Whatsapp Group.", "success").then(val => {
                window.location.reload()
            })
        }
        else {
            swal("Oops", "Please try again after some time.", "error")
        }
    })


})