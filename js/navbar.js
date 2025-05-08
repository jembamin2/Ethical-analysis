
document.addEventListener("DOMContentLoaded", function() {

    //import style sheet
    let boostrapCSS = document.createElement("link");
    boostrapCSS.rel = "stylesheet";
    boostrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    boostrapCSS.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    boostrapCSS.crossOrigin = "anonymous";
    document.head.appendChild(boostrapCSS);

    //import second style sheet
    let boostrapCSS2 = document.createElement("link");
    boostrapCSS2.rel = "stylesheet";
    boostrapCSS2.href = "../css/carousel.css";
    document.head.appendChild(boostrapCSS2);

    //dark and light theme
    let colormodeJS = document.createElement("script");
    colormodeJS.src = "../js/color-modes.js";
    colormodeJS.defer = true;
    document.head.appendChild(colormodeJS);


    let boostrapJS = document.createElement("script")
    boostrapJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    boostrapJS.crossOrigin = "anonymous";
    boostrapJS.defer = true;    
    boostrapJS.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    document.head.appendChild(boostrapJS);


    let navbar = document.createElement("navbar");
    // navbar.classList.add("p-1") //jsp pourquoi maintenant plus besoin
    navbar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
    </svg>

    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

        <header data-bs-theme="dark">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-secondary">
                <div class="container-fluid container ">
                 <a class="navbar-brand" href="index.html">La censure des réseaux</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html"></a>
                    </li>
                    <li class="nav-item">

                        <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" id="dropdownEthique" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Analyse Ethique
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownEthique">
                            <li><a class="dropdown-item" href="EthiqueVertue.html">Ethique des vertues</a></li>
                            <li><a class="dropdown-item" href="EthiqueDeontologisme.html">Ethique du déontologisme</a></li>
                            <li><a class="dropdown-item" href="EthiqueConsequentialisme.html">Ethique du conséquentialisme</a></li>
                            <li><a class="dropdown-item" href="EthiqueResponsabilite.html">Ethique de la responsabilité</a></li>
                        </ul>
                    </li>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="Enquêtes.html">Enquêtes</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Avis d'expert
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a class="dropdown-item" href="Expert1_Duez.html">Laurent Duez</a></li>
                            <li><a class="dropdown-item" href="Expert2_Hari.html">Hari</a></li>
                            <li><a class="dropdown-item" href="Expert3_UHelp.html">U-Psy</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="NotreAvis.html">Notre avis</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="sources.html">Sources & références</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="Equipe.html">Notre équipe</a>
                    </li>
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="../../">Retour</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    `;

    document.body.prepend(navbar)


    let footer = document.createElement("footer");
    // footer.className = "container";
    footer.classList.add("container")
    footer.classList.add("mt-3")
    // footer.innerHTML = `<p class="float-end"><a href="#">Back to top</a></p>
    // <p>Faut-il censurer les réseaux sociaux ? </p>`;

    footer.innerHTML = `
    <hr class="featurette-divider"></hr>
    <div class="row container align-items-center">
      <div class="col-md-3 col-12 mx-auto text-center"><img src="../Images/umons-log.webp" class="img-fluid w-65" alt="Umons"></div>
      <div class="col-md-6 col-12 order-first order-md-2 mx-auto text-center">
        <div class="display-6 mb-4">À propos</div>
        <div>Réaliser dans le cadre du cours de questions d'éthique en IA et en NTIC</div>
        <div>Réaliser par Mourad Faris, Benjamin Lienard, Medhi Vanderberken et Cyril Taquet</div>
        <div>© 2025 Copyright</div>
      </div>
      <div class="col-md-3 col-12 order-last mx-auto text-center"><img src="../Images/FPMs.png" class="img-fluid w-50 " alt="Faculte Polytechnique de Mons"></div>
    </div>`
    document.body.appendChild(footer)

    
});
