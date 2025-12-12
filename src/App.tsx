import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/index";
import FrameworksIndex from "./pages/frameworks/index";
import ToolsIndex from "./pages/tools/index";
import ProjectsIndex from "./pages/projects/index";
import KuzuMemoryMCPPage from "./pages/projects/kuzu-memory-mcp";
import { R37HealthcareAIPost } from "./pages/blog/R37HealthcareAI";
import PythonPage from "./pages/frameworks/Python";
import PyTorchPage from "./pages/frameworks/PyTorch";
import TensorFlowPage from "./pages/frameworks/TensorFlow";
import MLXPage from "./pages/frameworks/MLX";
import LangChainPage from "./pages/frameworks/LangChain";
import LangGraphPage from "./pages/frameworks/LangGraph";
import MCPPage from "./pages/tools/MCP";
import FlowisePage from "./pages/tools/Flowise";
import N8nPage from "./pages/tools/n8n";
import ComfyUIPage from "./pages/tools/ComfyUI";
import MarkerPage from "./pages/tools/Marker";
import LabelStudioPage from "./pages/tools/LabelStudio";

import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="frameworks">
              <Route index element={<FrameworksIndex />} />
              <Route path="python" element={<PythonPage />} />
              <Route path="pytorch" element={<PyTorchPage />} />
              <Route path="tensorflow" element={<TensorFlowPage />} />
              <Route path="mlx" element={<MLXPage />} />
              <Route path="langchain" element={<LangChainPage />} />
              <Route path="langgraph" element={<LangGraphPage />} />
              <Route path="mcp" element={<MCPPage />} />
              <Route path="marker" element={<MarkerPage />} />
            </Route>

            <Route path="tools">
              <Route index element={<ToolsIndex />} />
              <Route path="flowise" element={<FlowisePage />} />
              <Route path="n8n" element={<N8nPage />} />
              <Route path="comfyui" element={<ComfyUIPage />} />
              <Route path="label-studio" element={<LabelStudioPage />} />
            </Route>

            <Route path="projects">
              <Route index element={<ProjectsIndex />} />
              <Route path="kuzu-memory-mcp" element={<KuzuMemoryMCPPage />} />
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