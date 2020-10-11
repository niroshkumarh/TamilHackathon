const create_element = (type, obj = {}) => {
    let elem = document.createElement(type)

    for (let [key, value] of Object.entries(obj)) {
        elem[key] = value
    }
    return document.createElement(type)
}

const input_form = (i) => {
    return `<div class="row">
<center>Team Member ${i + 2}</center>
<div class="col-sm-12">
    <div class="col-sm-10 col-half-offset" id="${5*i+1}">
        <div class="form-row">
            <input type="text" name="name2" id="name2"
                placeholder="Name / பெயர் " />
        </div>
    </div>
    <div class="col-sm-10 col-half-offset form-row my-2" id="${5*i+2}">
        <select class="form-control"
            name="Profession2" id="Profession2">
            <option value="0">----- Profession -----</option>
            <option value="Student">Student</option>
            <option value="Working">Working</option>
        </select>
    </div>
    <div class="col-sm-10 col-half-offset form-row my-2" id="${5*i+3}">
        <input type="text" name="CollegeWorkstationName2"
            id="CollegeWorkstationName2"
            placeholder="College/Workstation Name" />
    </div>
    <div class="col-sm-10 col-half-offset form-row my-2" id="${5*i+4}">
        <input type="email" name="email2" id="email2"
            placeholder="Email/மின்னஞ்சல் முகவரி " />
    </div>
    <div class="col-sm-10 col-half-offset form-row my-2" id="${5*i+5}">
        <input type="text" name="phone2" id="phone2"
            placeholder="Phone Number" />
    </div>
</div>
</div>
`}


const handle_team_change = (event) => {

    let target_div = document.querySelector("#myhtml")
    target_div.innerHTML = ""
    let no_of_objects = event.target.value

    for (let i = 0; i < no_of_objects-1; i++) {
        let div_elem = create_element('div', { 'id': `team_${i}`, 'className': 'team_div' })
        // div_elem.style.height = "200px"
        // div_elem.style['z-index'] = '100'
        console.log(div_elem)
        div_elem.innerHTML = input_form(i)
        target_div.append(div_elem)
        console.log("here...")
    }
} 


$("#login-form").submit(function (e) {
	e.preventDefault()

	// document.getElementById("submit_btn").disabled = true
	// document.getElementById("submit_btn").classList.add("disabled")
	const Submit_btn = document.getElementById("submit_btn")
	Submit_btn.value="Wait... "
	Submit_btn.disabled=true
	Submit_btn.classList.add("disabled̥")
	// $("#alert_resp_box").show()
	let form_data = new FormData(document.querySelector("#login-form"))

	fetch("https://script.google.com/macros/s/AKfycbw9mIxrlQ3_nCG_tPuLbVzpPAkp9mK238xr3dEGqXVG7XhhsUsm/exec",{
		method:"POST",
		body:form_data
	}).then(response=>{
		return response.json()
	}).then(json_response=>{
		if(json_response.result == "success"){
			swal("Good Job !","Check your Email & join Whatsapp Group.","success").then(val=>{
				window.location.reload()
			})
		}
		else{
			swal("Oops","Please try again after some time.","error")
		}
	})


})