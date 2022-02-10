import ajax from "./ajax";

const BASE_URL = 'http://localhost:5000';

export const reqSendEmail = (content) => ajax(`${BASE_URL}/send-email/`, content, 'POST'); 