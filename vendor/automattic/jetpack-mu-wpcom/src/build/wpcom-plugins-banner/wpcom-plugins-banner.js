document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector("#plugin-filter");if(n)document.documentElement.style.setProperty("--wpcom-plugins-banner-image",`url(${wpcomPluginsBanner.bannerBackground})`),n.insertAdjacentHTML("beforebegin",`\n\t\t<div class="wpcom-plugins-banner">\n\t\t\t<div class="wpcom-plugins-banner__content">\n\t\t\t\t<img src="${wpcomPluginsBanner.logo}" alt="WordPress.com">\n\t\t\t\t<h3>${wpcomPluginsBanner.title}</h3>\n\t\t\t\t<p>${wpcomPluginsBanner.description}</p>\n\t\t\t\t<a href="${wpcomPluginsBanner.actionUrl}">${wpcomPluginsBanner.actionText}</a>\n\t\t\t</div>\n\t\t</div>\n\t`),new MutationObserver((()=>{if(!document.querySelector(".plugin-install-search .current")||document.querySelector(".no-plugin-results"))document.querySelector(".wpcom-plugins-banner").classList.remove("hidden");else document.querySelector(".wpcom-plugins-banner").classList.add("hidden")})).observe(document.getElementById("plugin-filter"),{childList:!0})}));