import React from 'react';
import { FrameworkDetailPage } from '../../components/FrameworkDetailPage';

export default function PythonPage() {
    return (
        <FrameworkDetailPage
            title="Python"
            description="A general-purpose language that powers most modern ML and AI tooling."
            framework="python"
            experience="Python is my default language for experiments, automation, and production glue—especially across data processing, model training, and orchestration."
            quickStart="python3 --version"
            githubUrl="https://github.com/python/cpython"
        />
    );
}
