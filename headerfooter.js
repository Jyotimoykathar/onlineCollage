/****************************************/
/******COMMON HEADER FOOTER SECTION*******/
/****************************************/
// Header section start
class NavHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    ${/*Topbar Start*/ ""}
    <div class="container-fluid d-none d-lg-block">
      <div class="row align-items-center px-xl-5">
        <div class="col-lg-3">
           <a href="./index.html" class="text-decoration-none">
          <img
          src="./logo1.png "
          class="logo img-fluid"
          alt="logo_image"
        />
          </a>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center fs-6">
            <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
            <div class="text-left">
              <h6 class="font-weight mb-1 fs-6">Our Office</h6>
              <small>Rangia Town, Kamrup(Rural), Assam</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center">
            <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
            <div class="text-left">
              <h6 class="font-weight-semi-bold mb-1">Email Us</h6>
              <small>indo-asian.com</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center">
            <i class="fa fa-2x fa-phone text-primary mr-3"></i>
            <div class="text-left">
              <h6 class="font-weight-semi-bold mb-1">Call Us</h6>
              <small>+91 7002055137</small>,
              <small>+91 9436216996</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${/*Topbar end*/ ""}

    ${/*Navigation section start*/ ""}
    <div class="container-fluid">
    <div class="row border-top px-xl-5">
      <div class="col-lg-3 d-none d-lg-block">
        <a
          class="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
          data-toggle="collapse"
          href="#navbar-vertical"
          style="height: 67px; padding: 0 30px"
        >
          <h5 class="text-primary m-0">
            <i class="fa fa-book-open mr-2"></i>Courses
          </h5>
          <i class="fa fa-angle-down text-primary"></i>
        </a>
        <nav
          class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
          id="navbar-vertical"
          style="width: calc(100% - 30px); z-index: 9"
        >
          <div class="navbar-nav w-100">
          ${/*<div class="nav-item dropdown border">*/ ""}
            
              <a href="./courses/bvocMLT.html" class=" nav-item nav-link"
                >B.Voc in MLT
                ${/*<i class="fa fa-angle-down float-right mt-1"></i> */ ""}
                
              </a>
            ${/*</div>*/ ""}  
            
            <a href="./courses/bvocRMI.html" class="nav-item nav-link"
              >B.Voc in RMI</a
            >
            <a href="./courses/bvocOTT.html" class="nav-item nav-link">
              B.Voc in OTT</a
            >
            <a href="./courses/bvocDT.html" class="nav-item nav-link"
              >B.Voc in DT</a
            >
            <a href="./courses/bvocSD.html" class="nav-item nav-link"
              >B.Voc in SD</a
            >
            <a href="./courses/bvocHM.html" class="nav-item nav-link"
              >B.Voc in HM</a
            >
          </div>
        </nav>
      </div>
      <div class="col-lg-9">
        <nav
          class="navbar navbar-expand-lg bg-light navbar-light py-lg-0 px-0"
        >
          
           <a href="" class="text-decoration-none d-block d-lg-none">
          <img
          src="./logo1.png"
          class="logo img-fluid d-block d-lg-none"
          alt="logo_image"
        />
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav py-0">
              <a href="index.html" class="nav-item nav-link major-nav">Home</a>
              <a href="about.html" class="nav-item nav-link major-nav">About</a>
              <a href="gallery.html" class="nav-item nav-link major-nav">Gallery</a>
              <a href="course.html" class="nav-item nav-link major-nav">Courses</a>
              <a href="teacher.html" class="nav-item nav-link major-nav">Teachers</a>
              <a href="contact.html" class="nav-item nav-link major-nav">Contact</a>
            </div>
            <a
              class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
              href=""
              >Join Now</a
            >
          </div>
        </nav>
      </div>
    </div>
  </div>
    ${/*Navigation section end*/ ""}
    `;
  }
}
customElements.define("nav-header", NavHeader);

// Footer-section start
class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    ${/*Footer section*/ ""}
    <div
      class="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
      style="margin-top: 90px"
    >
      <div class="row pt-5">
        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-md-6 mb-5">
              <h5
                class="text-primary text-uppercase mb-4"
                style="letter-spacing: 5px"
              >
                Get In Touch
              </h5>
              <p>
                <i class="fa fa-map-marker-alt mr-2"></i>Rangia Town,
                Kamrup(Rural), Assam
              </p>
              <p><i class="fa fa-phone-alt mr-2"></i>+91 7002055137</p>
              <p><i class="fa fa-envelope mr-2"></i>indo-asian.com</p>
              <div class="d-flex justify-content-start mt-4">
                <a class="btn btn-outline-light btn-square mr-2" href="#"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a
                  class="btn btn-outline-light btn-square mr-2"
                  href="https://facebook.com/Indoasiangroupofinstitutions/"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-outline-light btn-square mr-2" href="#"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
                <a
                  class="btn btn-outline-light btn-square"
                  href="https://www.instagram.com/indo_asian_group_of_inst/"
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <h5
                class="text-primary text-uppercase mb-4"
                style="letter-spacing: 5px"
              >
                Our Courses
              </h5>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-white mb-2" href="./courses/bvocMLT.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.Voc in MLT</a
                >
                <a class="text-white mb-2" href="./courses/bvocRMI.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.Voc in RMI</a
                >
                <a class="text-white mb-2" href="./courses/bvocOTT.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.Voc in OTT</a
                >
                <a class="text-white mb-2" href=".courses/bvocDT.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.Voc in DT</a
                >
                <a class="text-white" href="./courses/bvocSD.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.Voc in SD</a
                >
                <a class="text-white" href="./courses/bvocHM.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.voc in HM</a
                >

              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 mb-5">
          <h5
            class="text-primary text-uppercase mb-4"
            style="letter-spacing: 5px"
          >
            Newsletter
          </h5>
          <p>
            Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum
            sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo
            eirmod sea justo no lorem est diam
          </p>
          <div class="w-100">
            <div class="input-group">
              <input
                type="text"
                class="form-control border-light"
                style="padding: 30px"
                placeholder="Your Email Address"
              />
              <div class="input-group-append">
                <button class="btn btn-primary px-4">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
      style="border-color: rgba(256, 256, 256, 0.1) !important"
    >
      <div class="row">
        <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
          <p class="m-0 text-white">
            &copy; <a href="#">Indo Asian Group of Institutions</a>. All Rights
            Reserved.
          </p>
        </div>
        <div class="col-lg-6 text-center text-md-right">
          <ul class="nav d-inline-flex">
            <li class="nav-item">
              <a class="nav-link text-white py-0" href="#">Privacy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white py-0" href="#">Terms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white py-0" href="#">FAQs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white py-0" href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
         `;
  }
}
customElements.define("main-footer", MainFooter);

/***********************/
/******COURSES SECTION*******/
/***********************/
// Courses  Header
class CoursesHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    ${/*Topbar Start*/ ""}
    <div class="container-fluid d-none d-lg-block">
      <div class="row align-items-center px-xl-5">
        <div class="col-lg-3">
          
           <a href="../index.html" class="text-decoration-none">
          <img
          src="./logo1.png "
          class="logo img-fluid"
          alt="logo_image"
        />
          </a>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center fs-6">
            <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
            <div class="text-left">
              <h6 class="font-weight mb-1 fs-6">Our Office</h6>
              <small>Rangia Town, Kamrup(Rural), Assam</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center">
            <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
            <div class="text-left">
              <h6 class="font-weight-semi-bold mb-1">Email Us</h6>
              <small>indo-asian.com</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center">
            <i class="fa fa-2x fa-phone text-primary mr-3"></i>
            <div class="text-left">
              <h6 class="font-weight-semi-bold mb-1">Call Us</h6>
              <small>+91 7002055137</small>,
              <small>+91 9436216996</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${/*Topbar end*/ ""}

    ${/*Navigation section start*/ ""}
    <div class="container-fluid">
    <div class="row border-top px-xl-5">
      <div class="col-lg-3 d-none d-lg-block">
        <a
          class="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
          data-toggle="collapse"
          href="#navbar-vertical"
          style="height: 67px; padding: 0 30px"
        >
          <h5 class="text-primary m-0">
            <i class="fa fa-book-open mr-2"></i>Courses
          </h5>
          <i class="fa fa-angle-down text-primary"></i>
        </a>
        <nav
          class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
          id="navbar-vertical"
          style="width: calc(100% - 30px); z-index: 9"
        >
          <div class="navbar-nav w-100">
            <div class="nav-item dropdown border">
              <a href="#" class="nav-link" ${/*data-toggle="dropdown"*/ ""} 
                >BVOCCT COURSES<i class="fa fa-angle-down float-right mt-1"></i
              ></a>
              
            </div>
            <a href="./courses/bvocop/bvocop.html" class="nav-item nav-link"
              >BVOCOP COURSES</a
            >
            <a href="./courses/bvocot/bvocot.html" class="nav-item nav-link">
              BVOCOT COURSES</a
            >
            <a href="./courses/surgery.html" class="nav-item nav-link"
              >BVOFAD COURSES</a
            >
            <a href="./courses/angiography.html" class="nav-item nav-link"
              >BVOMALT COURSES</a
            >
            <a href="./courses/angiography.html" class="nav-item nav-link"
              >BVORAD COURSES</a
            >
          </div>
        </nav>
      </div>
      <div class="col-lg-9">
        <nav
          class="navbar navbar-expand-lg bg-light navbar-light py-lg-0 px-0"
        >
        <a href="../../index.html" class="text-decoration-none d-block d-lg-none">
        <img
        src="./logo1.png"
        class="logo img-fluid d-block d-lg-none"
        alt="logo_image"
      />
        </a>
          
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav py-0">
              <a href="../../index.html" class="nav-item nav-link">Home</a>
              <a href="../../about.html" class="nav-item nav-link">About</a>
              <a href="../../gallery.html" class="nav-item nav-link">Gallery</a>

              <a href="../../course.html" class="nav-item nav-link">Courses</a>
              <a href="../../teacher.html" class="nav-item nav-link">Teachers</a>
              
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
            <a
              class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
              href=""
              >Join Now</a
            >
          </div>
        </nav>
      </div>
    </div>
  </div>
    ${/*Navigation section end*/ ""}
    `;
  }
}
customElements.define("courses-header", CoursesHeader);

// Courses Footer-section start
class CoursesFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    ${/*Footer section*/ ""}
    <div
      class="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
      style="margin-top: 90px"
    >
      <div class="row pt-5">
        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-md-6 mb-5">
              <h5
                class="text-primary text-uppercase mb-4"
                style="letter-spacing: 5px"
              >
                Get In Touch
              </h5>
              <p>
                <i class="fa fa-map-marker-alt mr-2"></i>Rangia Town,
                Kamrup(Rural), Assam
              </p>
              <p><i class="fa fa-phone-alt mr-2"></i>+91 7002055137</p>
              <p><i class="fa fa-envelope mr-2"></i>indo-asian.com</p>
              <div class="d-flex justify-content-start mt-4">
                <a class="btn btn-outline-light btn-square mr-2" href="#"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a
                  class="btn btn-outline-light btn-square mr-2"
                  href="https://facebook.com/Indoasiangroupofinstitutions/"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-outline-light btn-square mr-2" href="#"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
                <a
                  class="btn btn-outline-light btn-square"
                  href="https://www.instagram.com/indo_asian_group_of_inst/"
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <h5
                class="text-primary text-uppercase mb-4"
                style="letter-spacing: 5px"
              >
                Our Courses
              </h5>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-white mb-2" href="./bvocMLT.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.voc in MLT</a
                >
                <a class="text-white mb-2" href="bvocRMI.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.voc in RMI</a
                >
                <a class="text-white mb-2" href="bvocOTT.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.voc in OTT</a
                >
                <a class="text-white mb-2" href="bvocDT.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.voc in DT</a
                >
                <a class="text-white" href="bvocSD.html"
                  ><i class="fa fa-angle-right mr-2"></i>B.voc in SD</a
                >
                <a class="text-white" href="#"
                  ><i class="fa fa-angle-right mr-2"></i>B.voc in HTM</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 mb-5">
          <h5
            class="text-primary text-uppercase mb-4"
            style="letter-spacing: 5px"
          >
            Newsletter
          </h5>
          <p>
            Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum
            sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo
            eirmod sea justo no lorem est diam
          </p>
          <div class="w-100">
            <div class="input-group">
              <input
                type="text"
                class="form-control border-light"
                style="padding: 30px"
                placeholder="Your Email Address"
              />
              <div class="input-group-append">
                <button class="btn btn-primary px-4">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
      style="border-color: rgba(256, 256, 256, 0.1) !important"
    >
      <div class="row">
        <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
          <p class="m-0 text-white">
            &copy; <a href="#">Indo Asian Group of Institutions</a>. All Rights
            Reserved.
          </p>
        </div>
        <div class="col-lg-6 text-center text-md-right">
          <ul class="nav d-inline-flex">
            <li class="nav-item">
              <a class="nav-link text-white py-0" href="#">Privacy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white py-0" href="#">Terms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white py-0" href="#">FAQs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white py-0" href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
         `;
  }
}
customElements.define("courses-footer", CoursesFooter);

/******adding active class on current page*******/
document.querySelectorAll(".major-nav").forEach((link) => {
  // console.log(link.href);
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
