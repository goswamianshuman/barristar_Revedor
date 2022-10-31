import Cookies from "js-cookie";
import { domain } from "./constants";

export const objectToArray = input => {
    const entries = Object.entries(input);
    entries.forEach(entry => entry[0] = +entry[0]);
    return entries;
};


export function translateToString(string) {
    string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    string = string.replace(/\s/g, '-');
    return string;
}


// export function getParams(prop) {
//     var url = prop.location.pathname + prop.location.search;
//     var params = {};
//     var parser = document.createElement('a');
//     parser.href = url;
//     var query = parser.search.substring(1);
//     var vars = query.split('&');
//     for (var i = 0; i < vars.length; i++) {
//         var pair = vars[i].split('=');
//         params[pair[0]] = decodeURIComponent(pair[1]);
//     }
//     return params;
// }

// function plainText(html) {
//     let temp = document.createElement("div");
//     temp.innerHTML = html;
//     return temp.textContent || temp.innerText || "";
// }

export function socialShare(social, url, id, titleHtml, desc) {
    let title = plainText(titleHtml);
    if (social === 'facebook') {
        let fbUrl = `${domain}/${url !== null ? `${url}/` : ''}${id}/${translateToString(title.toLowerCase())}`
        return "https://web.facebook.com/sharer.php?u=" + fbUrl
    }
    if (social === 'twitter') {
        return `https://twitter.com/intent/tweet?text=${domain}/${url !== null ? `${url}/` : ''}${id}/${translateToString(title.toLowerCase())}`
    }
    if (social === 'linkedin') {
        return `https://www.linkedin.com/shareArticle?mini=true&url=${domain}/${url !== null ? `${url}/` : ''}${id}/${translateToString(title.toLowerCase())}&title=${title}&summary=&source=`
    }
}

function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
    return rv;
}

/*
k format 
num = int  
*/
export const kFormatter = (num) => {
    if (num < 1e3) return num;
    if (num >= 1e3 && num < 1e6) return +(num / 1e3).toFixed(1).replace(/\.0$/, '') + "K";
    if (num >= 1e6 && num < 1e9) return +(num / 1e6).toFixed(1).replace(/\.0$/, '') + "M";
    if (num >= 1e9 && num < 1e12) return +(num / 1e9).toFixed(1).replace(/\.0$/, '') + "B";
    if (num >= 1e12) return +(num / 1e12).toFixed(1).replace(/\.0$/, '') + "T";
}

export const getShortContent = (str = "", num = 150) => {
    let str_len = str.length
    if (str_len > num) {
        return str.substring(0, num) + '...'
    }
    return str
}