import React from 'react';
import { Alert } from "react-bs-notifier";

const Failed = props => (
    <Alert type={props.type} headline={props.headline} timeout={300}>
        <p>{props.message}</p>
    </Alert>
)