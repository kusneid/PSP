class Ajax {
    /**
     * GET запрос
     * @param {string} url - Адрес запроса
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async get(url, callback) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            callback(data, response.status);
        } catch (e) {
            console.error('Ошибка запроса:', e);
            callback(null, 500);
        }
    }

    /**
     * POST запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для отправки
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async post(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            callback(responseData, response.status);
        } catch (e) {
            console.error('Ошибка запроса:', e);
            callback(null, 500);
        }
    }

    /**
     * PATCH запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для обновления
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async patch(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            callback(responseData, response.status);
        } catch (e) {
            console.error('Ошибка запроса:', e);
            callback(null, 500);
        }
    }

    /**
     * DELETE запрос
     * @param {string} url - Адрес запроса
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async delete(url, callback) {
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            });
            const data = response.status === 204 ? null : await response.json();
            callback(data, response.status);
        } catch (e) {
            console.error('Ошибка запроса:', e);
            callback(null, 500);
        }
    }
}

export const ajax = new Ajax(); 