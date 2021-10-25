// API documentation can be found here: https://ipapi.co/api/#introduction

// consts for IP info
const asn = document.querySelector(".asn");
const city = document.querySelector(".city");
const continent_code = document.querySelector(".continent_code");
const country = document.querySelector(".country");
const country_area = document.querySelector(".country_area");
const country_calling_code = document.querySelector(".country_calling_code");
const country_capital = document.querySelector(".country_capital");
const country_code = document.querySelector(".country_code");
const country_code_iso3 = document.querySelector(".country_code_iso3");
const country_name = document.querySelector(".country_name");
const country_population = document.querySelector(".country_population");
const country_tld = document.querySelector(".country_tld");
const currency = document.querySelector(".currency");
const currency_name = document.querySelector(".currency_name");
const in_eu = document.querySelector(".in_eu");
const ip = document.querySelector(".ip");
const languages = document.querySelector(".languages");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const org = document.querySelector(".org");
const postal = document.querySelector(".postal");
const region = document.querySelector(".region");
const region_code = document.querySelector(".region_code");
const timezone = document.querySelector(".timezone");
const utc_offset = document.querySelector(".utc_offset");
const version = document.querySelector(".version");

// get IP
function getIp(input) {
    IP = input.value;
    console.log(IP);
    url = `https://ipapi.co/${IP}/json`;
    console.log(url);
    return IP;
}

async function getIpLookUp() {
    response = await fetch(url);
    data = await response.json();
    asn.innerHTML = `Asn: ${data.asn}`;
    city.innerHTML = `City: ${data.city}`;
    continent_code.innerHTML = `Continent Code: ${data.continent_code}`;
    country.innerHTML = `Country: ${data.country}`;
    country_area.innerHTML = `Country Area: ${data.country_area}`;
    country_calling_code.innerHTML = `Country Calling Code: ${data.country_calling_code}`;
    country_capital.innerHTML = `Country Capital: ${data.country_capital}`;
    country_code.innerHTML = `Country Code: ${data.country_code}`;
    country_code_iso3.innerHTML = `Country Code ISO3: ${data.country_code_iso3}`;
    country_name.innerHTML = `Country Name: ${data.country_name}`;
    country_population.innerHTML = `Country Population: ${data.country_population}`;
    country_tld.innerHTML = `Country Tld: ${data.country_tld}`;
    currency.innerHTML = `Currency: ${data.currency}`;
    currency_name.innerHTML = `Currency Name: ${data.currency_name}`;
    in_eu.innerHTML = `In EU: ${data.in_eu}`;
    ip.innerHTML = `IP: ${data.ip}`;
    languages.innerHTML = `Languages: ${data.languages}`;
    latitude.innerHTML = `Latitude: ${data.latitude}`;
    longitude.innerHTML = `Latitude: ${data.longitude}`;
    org.innerHTML = `Org: ${data.org}`;
    postal.innerHTML = `Postal: ${data.postal}`;
    region.innerHTML = `Region: ${data.region}`;
    region_code.innerHTML = `Region Code: ${data.region_code}`;
    timezone.innherHTML = `Timezone: ${data.timezone}`;
    utc_offset.innerHTML = `UTC Offset: ${data.utc_offset}`;
    version.innerHTML = `Version: ${data.version}`;

    console.log(data)
}
