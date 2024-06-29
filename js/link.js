const links = document.querySelectorAll('a');

links.forEach(link => {
    link.setAttribute('target', '_blank');
});

    document.addEventListener("DOMContentLoaded", function() {
            let links = document.querySelectorAll(".link-with-favicon");
            links.forEach(function(link) {
                let linkUrl = new URL(link.href);
                let faviconUrl = linkUrl.origin + "/favicon.ico";

                let img = document.createElement("img");
                img.src = faviconUrl;
                img.alt = "Favicon";
                img.onerror = function() {
           
                    let fallbackIcon = document.createElement("span");
                    fallbackIcon.className = "material-icons";
                    fallbackIcon.innerText = "insert_drive_file";
                    link.insertBefore(fallbackIcon, link.firstChild);
                    img.remove();
                };
                link.insertBefore(img, link.firstChild);
            });
        });