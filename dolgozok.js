//http://localhost/APIdolgozok3.0/index.php?dolgozok
document.addEventListener("DOMContentLoaded", function(){
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");    
    const selectButton = document.getElementById("select");

    createButton.addEventListener("click", async function () {
        let dolgozoid = document.createElement("dolgozoid").value;
        const baseUrl ="http://localhost/APIdolgozok3.0/index.php?dolgozok/" + dolgozoid;
        const formdata = new FormData(document.getElementById("dolgozoForm"));
        let options = {
            method: "POST",
            mode: "cors",
            body: formdata
        };
        let response = await fetch(baseUrl, options);
        if(response.ok){
            console.log("Sikeres feltöltés");
        }else{
            console.error("Sikertelen feltöltés");
        }
        return response;
    });

    readButton.addEventListener("click", async function(){
        const baseUrl ="http://localhost/APIdolgozok3.0/index.php?dolgozok";
        let options = {
            method: "GET",
            mode: "cors"
        }
        let response = await fetch(baseUrl, options);
        if(response.ok){
            let data = await response.json();
            dolgozoListazas(data);
        }else{
            console.error("Hiba a szerver válaszában");
        }

    });

    function dolgozoListazas(dolgozok){
        let dolgozoDiv = document.getElementById("dolgozoklista");
        let tablazat = dolgozoFejlec();
        for(let dolgozo of dolgozok){
            tablazat += dolgozoSor(dolgozo);
        }
        dolgozoDiv.innerHTML = tablazat + "</tbody></tbody>";
        return dolgozoDiv;
    };

    function dolgozoSor(dolgozo){
        let sor = `<tr>
        <td>${dolgozo.dolgozoid}</td>
        <td>${dolgozo.nev}</td>
        <td>${dolgozo.neme}</td>
        <td>${dolgozo.reszleg}</td>
        <td>${dolgozo.belepesev}</td>
        <td>${dolgozo.ber}</td>
        </tr>`;
        return sor;
    };

    function dolgozoFejlec(){
        let fejlec = `<table class="table table-striped">
        <thead>
            <tr>
                <th>DolgozóID: </th>
                <th>Név: </th>
                <th>Neme: </th>
                <th>Részleg: </th>
                <th>Belépésév: </th>
                <th>Bér: </th>                
            </tr>
        </thead>
        <tbody>`;
        return fejlec;
    };
});