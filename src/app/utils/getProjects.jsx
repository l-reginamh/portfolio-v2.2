import axios from "axios";
export default async function getProjects() {
    const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.REACT_APP_PROJECTS;
    
    try {
        // Make sure to replace 'YOUR_API_KEY' and 'YOUR_BASE_ID' with your actual Airtable API key and base ID
        const response = await axios.get(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
            headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`
            }
        }
        );
        return response.data.records;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}