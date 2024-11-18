import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - E-Commerce`;
        } else {
            document.title = 'E-Commerce | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
