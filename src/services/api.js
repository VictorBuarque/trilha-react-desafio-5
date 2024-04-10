import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xnfzogqzlnijualoalyg.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZnpvZ3F6bG5panVhbG9hbHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxODg0MDMsImV4cCI6MjAyNzc2NDQwM30.8Q_JOWjIBC7fWef1tb9IFJhKREILV7xsBeNnsIg242Y",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZnpvZ3F6bG5panVhbG9hbHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxODg0MDMsImV4cCI6MjAyNzc2NDQwM30.8Q_JOWjIBC7fWef1tb9IFJhKREILV7xsBeNnsIg242Y"
    }
})
