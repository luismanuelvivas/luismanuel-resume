document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    header.innerHTML = '<header class="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-4 shadow-lg sticky top-0 z-50">' +
        '<div class="container mx-auto flex justify-between items-center">' +
            '<div class="flex items-center space-x-4">' +
                '<div class="text-2xl font-bold bg-white text-blue-800 px-3 py-1 rounded-md">LV</div>' +
            '</div>' +
            
            '<button id="menu-toggle" class="lg:hidden focus:outline-none">' +
                '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>' +
                '</svg>' +
            '</button>' +
            
            '<nav id="main-nav" class="hidden lg:block">' +
                '<ul class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">' +
                    '<li><a href="#about" class="block hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded hover:bg-blue-800/50">About</a></li>' +
                    '<li><a href="#experience" class="block hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded hover:bg-blue-800/50">Experience</a></li>' +
                    '<li><a href="#education" class="block hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded hover:bg-blue-800/50">Education</a></li>' +
                    '<li><a href="#skills" class="block hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded hover:bg-blue-800/50">Skills</a></li>' +
                    '<li><a href="#contact" class="block bg-blue-600 hover:bg-blue-500 transition-colors duration-300 py-2 px-6 rounded-md mt-2 lg:mt-0 lg:ml-4">Contact</a></li>' +
                '</ul>' +
            '</nav>' +
        '</div>' +
        
        '<div id="mobile-menu" class="hidden fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">' +
            '<div class="absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-blue-900 to-indigo-800 shadow-lg transform transition-transform duration-300 ease-in-out">' +
                '<div class="flex justify-end p-4">' +
                    '<button id="menu-close" class="focus:outline-none">' +
                        '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>' +
                        '</svg>' +
                    '</button>' +
                '</div>' +
                '<nav class="p-6">' +
                    '<ul class="space-y-6">' +
                        '<li><a href="#about" class="block hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded hover:bg-blue-800/50">About</a></li>' +
                        '<li><a href="#experience" class="block hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded hover:bg-blue-800/50">Experience</a></li>' +
                        '<li><a href="#education" class="block hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded hover:bg-blue-800/50">Education</a></li>' +
                        '<li><a href="#skills" class="block hover:text-blue-300 transition-colors duration-300 py-2 px-4 rounded hover:bg-blue-800/50">Skills</a></li>' +
                        '<li><a href="#contact" class="block bg-blue-600 hover:bg-blue-500 transition-colors duration-300 py-2 px-6 rounded-md mt-4">Contact</a></li>' +
                    '</ul>' +
                '</nav>' +
            '</div>' +
        '</div>' +
    '</header>';

    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
    });

    menuClose.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('#mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
});