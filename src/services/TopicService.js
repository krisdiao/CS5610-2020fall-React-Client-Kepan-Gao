const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/kepangao/topics"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/kepangao/lessons"
const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/kepangao/modules"

export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

export const createTopic = (lessonId,newTopic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateTopic = (topicId,newTopic) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTopic = topicId =>
    fetch(`${topicUrl}/${topicId}`,{
        method: "DELETE"
    }).then(response => response.json())


export default {
    findTopicsForLesson,
    createTopic,
    deleteTopic,
    updateTopic
}