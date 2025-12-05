import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/index";
import KnowledgeBaseIndex from "./pages/knowledge-base/index";
import FrameworksIndex from "./pages/knowledge-base/frameworks/index";
import ToolsIndex from "./pages/knowledge-base/tools/index";
import ProjectsIndex from "./pages/knowledge-base/projects/index";
import { R37HealthcareAIPost } from "./pages/blog/R37HealthcareAI";
import PyTorchPage from "./pages/knowledge-base/frameworks/PyTorch";
import TensorFlowPage from "./pages/knowledge-base/frameworks/TensorFlow";
import MLXPage from "./pages/knowledge-base/frameworks/MLX";
import LangChainPage from "./pages/knowledge-base/frameworks/LangChain";
import LangGraphPage from "./pages/knowledge-base/frameworks/LangGraph";
import MCPPage from "./pages/knowledge-base/tools/MCP";
import FlowisePage from "./pages/knowledge-base/tools/Flowise";
import N8nPage from "./pages/knowledge-base/tools/n8n";
import ComfyUIPage from "./pages/knowledge-base/tools/ComfyUI";
import MarkerPage from "./pages/knowledge-base/tools/Marker";

import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="knowledge-base">
              <Route index element={<KnowledgeBaseIndex />} />
              <Route path="frameworks">
                <Route index element={<FrameworksIndex />} />
                <Route path="pytorch" element={<PyTorchPage />} />
                <Route path="tensorflow" element={<TensorFlowPage />} />
                <Route path="mlx" element={<MLXPage />} />
                <Route path="langchain" element={<LangChainPage />} />
                <Route path="langgraph" element={<LangGraphPage />} />
              </Route>
              <Route path="tools">
                <Route index element={<ToolsIndex />} />
                <Route path="mcp" element={<MCPPage />} />
                <Route path="flowise" element={<FlowisePage />} />
                <Route path="n8n" element={<N8nPage />} />
                <Route path="comfyui" element={<ComfyUIPage />} />
                <Route path="marker" element={<MarkerPage />} />
              </Route>
              <Route path="projects" element={<ProjectsIndex />} />
            </Route>
            <Route path="blog">
              <Route path="r37-healthcare-ai" element={<R37HealthcareAIPost />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}