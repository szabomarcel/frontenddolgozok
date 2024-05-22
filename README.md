https://cdnjs.com/libraries/bootstrap: ->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js" integrity="sha512-7Pi/otdlbbCR+LnW+F7PwFcSDJOuUJB3OxtEHbg4vSMvzvJjde4Po1v4BR9Gdc9aXNUNFVUY+SK51wWT8WF0Gg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

Formhoz: https://www.w3schools.com/html/html_forms.asp

<div class="container">
    <h1><img src="https://bddsz.hu/sites/default/files/N%C3%A9vtelen_0.png" class="logot">Dolgozók</h1>
    <form action="#" method="post">
        <fieldset>
            <div class="row">
                <div class="mb-3 col-4">
                    <label for="dolgozokid" class="form-label">DolgozokId:</label>
                    <input type="text" class="form-control" id="dolgozokid" name="dolgozokid"><br><br>
                </div>                
        </fieldset>
        <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-primary" id="create"><i class="fa-solid fa-plus">Create</i></button>
            <button type="button" class="btn btn-dark" id="read"><i class="fa-solid fa-list-check">Read</i></button>
        </div>
    </form> 
    <div id="dolgozokLista">
    </div>
</div>
