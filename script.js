/* ===============================
   Simple Reset
================================ */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===============================
   Base typography & layout
================================ */
html, body {
  width: 100%;
  height: 100%;
  font-family: 'Jost', 'Meow Script', sans-serif; /* or your chosen fonts */
  color: #333;
  line-height: 1.5;
  background-color: #fff;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
li {
  list-style: none;
}

/* ===============================
   Utility classes
================================ */
.section-container {
  width: 90%;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
}

.fade-in {
  opacity: 0;
  animation: fadeInAnimation 1s forwards;
}

@keyframes fadeInAnimation {
  to {
    opacity: 1;
  }
}

/* Buttons (general) */
button,
.cta-button {
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px 18px;
  border-radius: 4px;
  transition: background 0.3s ease;
}
button:hover,
.cta-button:hover {
  background-color: #555;
}

/* ===============================
   Header / Overlay Menu
================================ */
header {
  position: relative;
}

/* The overlay menu container */
#menu_area.overlay-menu {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0,0,0,0.3);
  transform: translateX(-320px);
  transition: transform 0.4s ease;
}
/* When displayed, we move it into view */
#menu_area[style*="display: block"] {
  transform: translateX(0);
}

.menu-container {
  padding: 60px 20px;
}

.menu-container ul.font-en {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-container li.logo {
  margin-bottom: 30px;
}

#menu_logo {
  max-width: 150px;
}

/* Example links in the overlay */
.menu-container li a {
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  padding: 5px 0;
  transition: color 0.3s ease;
}
.menu-container li a:hover {
  color: #999;
}

/* Example for "onlineshop" button styling (optional) */
.onlineshop .button-white {
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #333;
  color: #333;
  padding: 8px 12px;
  transition: background 0.3s ease;
}
.onlineshop .button-white img {
  margin-right: 5px;
}
.onlineshop .button-white:hover {
  background-color: #333;
  color: #fff;
}

/* Close icon in overlay */
#menu_close_icon {
  cursor: pointer;
  width: 30px;
  height: auto;
  position: absolute;
  top: 20px;
  right: 20px;
}

/* Menu open icons (desktop vs. mobile) */
.menu_open_icon {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9998;
  cursor: pointer;
  display: flex;
}
.menu_open_icon img {
  width: 30px;
  height: auto;
}
.pc_only {
  display: none;
}
.sp_only {
  display: flex;
}
@media(min-width: 768px) {
  .pc_only {
    display: flex;
  }
  .sp_only {
    display: none;
  }
}

/* Dark overlay background behind menu */
#menu_overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9997;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

/* Hidden by default */
#menu_overlay[style*="display: none"] {
  display: none;
}

/* ===============================
   Hero Section
================================ */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* optional: if you want a background color or image directly: 
     background: url('hero-bg.jpg') no-repeat center center/cover; 
  */
}

.hero-image {
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
}
.hero-content h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.cta-button {
  font-size: 1rem;
  text-transform: uppercase;
}

/* ===============================
   About / Study / Portfolio / Contact
================================ */
section.fade-in.section-container {
  padding: 60px 0;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 700;
}
p {
  font-size: 1rem;
}

/* Study list example */
.study-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.study-item {
  flex: 1 1 300px;
  background-color: #f5f5f5;
  border-radius: 6px;
  padding: 20px;
}
.study-item h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

/* Portfolio list example */
.portfolio-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.portfolio-item {
  flex: 1 1 300px;
  padding: 10px;
  border: 1px solid #eee;
  text-align: center;
  border-radius: 6px;
  transition: transform 0.3s ease;
}
.portfolio-item:hover {
  transform: scale(1.02);
}
.portfolio-item img {
  margin-bottom: 10px;
}
.portfolio-item h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

/* ===============================
   Contact Form
================================ */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.contact-form button {
  align-self: flex-end;
}

/* ===============================
   Footer
================================ */
footer {
  width: 100%;
  padding: 40px 0;
  background-color: #f1f1f1;
  text-align: center;
  margin-top: 60px;
}
footer p {
  font-size: 14px;
  color: #666;
}

/* ===============================
   Modal
================================ */
.modal {
  position: fixed;
  z-index: 3000;
  left: 0; top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.7);
}
.modal.hidden {
  display: none;
}
.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 6px;
  max-width: 600px;
  width: 90%;
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  color: #333;
}

/* ===============================
   Scroll to Top Button
================================ */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 2000;
  background: #333;
  color: #fff;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.scroll-to-top.hidden {
  display: none;
}

/* ===============================
   Media Queries
================================ */
@media screen and (max-width: 767px) {
  .section-container {
    margin: 40px auto;
    padding: 0 10px;
  }

  .hero-content h1 {
    font-size: 1.8rem;
  }
  .hero-content p {
    font-size: 1rem;
  }

  .study-list, .portfolio-list {
    flex-direction: column;
  }
}
