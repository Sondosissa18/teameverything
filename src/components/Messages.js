import React, { useContext } from 'react';
import { StoreContext } from '../main';
import { useObserver } from 'mobx-react';

export default function Messages() {
    const store = useContext(StoreContext)
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