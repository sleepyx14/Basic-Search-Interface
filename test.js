$(document).ready(() => {
  $('#srch_button').on('click',() => {
    const srch_val = jQuery("#search").val()
    let endpoint = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search="+srch_val+"&limit=1&format=json"

    /*
    fetch, store, and display data
    */
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const title = myJson[0]
        const description = myJson[2]
        const link = myJson[3]

        return {title:title, description:description, link:link}
      })
      .then((srch_data) => {
        const title = srch_data.title
        const description = srch_data.description
        const link = srch_data.link

        let html = `<div class="res">`

        html += `<span id="res_title">${title}</span>`
        html += `<div id="res_description">${description}`
        html += `<br/><a href=${link}>More Info</a></div>`
        html += `</div>`
        jQuery("#results").html(html)
      })
  });
})
