document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    footer.innerHTML = '<footer class="bg-gradient-to-r from-blue-600 to-blue-800 text-gray-100 py-8 px-4">' +
        '<div class="container mx-auto max-w-7xl">' +
            '<div class="flex flex-col items-center justify-center">' +
                '<div class="mb-6 text-center">' +
                    '<p class="text-sm">&copy; 2023 Luis Vivas. All rights reserved.</p>' +
                    '<p class="text-xs mt-2">Made with ❤️ for our users</p>' +
                '</div>' +
                '<div class="mt-6 flex justify-center space-x-4">' +
                    '<a href="#" class="text-gray-300 hover:text-white">' +
                        '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' +
                    '</a>' +
                '</div>' +
            '</div>' +
            '<div class="mt-8 pt-8 border-t border-blue-500 text-center text-xs text-blue-200">' +
                '<p>This website uses cookies to ensure you get the best experience.</p>' +
            '</div>' +
        '</div>' +
    '</footer>';
});