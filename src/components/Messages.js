import React from 'react';
import { useStore } from '../store/useStore';
import { useObserver } from 'mobx-react';

export default function Messages() {
    const store = useStore()
    return useObserver(() => (
        <table className="table">
            <tbody>
                {
                    store.messages.map((message, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {message}
                                </td>
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
    )
    )
}