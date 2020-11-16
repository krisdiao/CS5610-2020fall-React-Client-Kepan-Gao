const WIDGET_URL = "https://pacific-lowlands-84173.herokuapp.com//api/widgets"
const TOPIC_URL  = "https://pacific-lowlands-84173.herokuapp.com//api/topics"

const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())

const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())

const createWidget = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            name: "NEW IMAGE",
            type: "IMAGE",
            topicId,
            text:"IMAGE Text",
            size:"1",
            url:"http://lorempixel.com/300/150",
        }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

const updateWidget = (widgetId, newWidget) =>{
    return fetch(`${WIDGET_URL}/${widgetId}`,{
        method:"PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
}
const deleteWidget = (widgetId) => {
    return fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "DELETE"
    })
}

export default {
    findAllWidgets,
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget,
}