import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/index";
import FrameworksIndex from "./pages/frameworks/index";
import ToolsIndex from "./pages/tools/index";
import ProjectsIndex from "./pages/projects/index";
import KuzuMemoryMCPPage from "./pages/projects/kuzu-memory-mcp";
import AgentDojoPage from "./pages/projects/agent-dojo";
import Neo4jFindsCongressGuiltyPage from "./pages/projects/neo4j-finds-congress-guilty";
import StartupCRMPage from "./pages/projects/startup-crm";
import LongPDFSplitterPage from "./pages/projects/long-pdf-splitter";
import MacOSAgentBuilderPage from "./pages/projects/macos-agent-builder";
import ExPatPlanPage from "./pages/projects/expat-plan";
import SpotLightPage from "./pages/projects/spot-light";
import ObVaultPage from "./pages/projects/obvault";
import MarkerMCPPage from "./pages/projects/marker-mcp";
import AudioEngineerMCPPage from "./pages/projects/audio-engineer-mcp";
import GimpMCPPage from "./pages/projects/gimp-mcp";
import ReaperMCPPage from "./pages/projects/reaper-mcp";
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
              <Route path="agent-dojo" element={<AgentDojoPage />} />
              <Route path="neo4j-finds-congress-guilty" element={<Neo4jFindsCongressGuiltyPage />} />
              <Route path="startup-crm" element={<StartupCRMPage />} />
              <Route path="long-pdf-splitter" element={<LongPDFSplitterPage />} />
              <Route path="macos-agent-builder" element={<MacOSAgentBuilderPage />} />
              <Route path="expat-plan" element={<ExPatPlanPage />} />
              <Route path="spot-light" element={<SpotLightPage />} />
              <Route path="obvault" element={<ObVaultPage />} />
              <Route path="marker-mcp" element={<MarkerMCPPage />} />
              <Route path="audio-engineer-mcp" element={<AudioEngineerMCPPage />} />
              <Route path="gimp-mcp" element={<GimpMCPPage />} />
              <Route path="reaper-mcp" element={<ReaperMCPPage />} />
            </Route>

            <Route path="blog">
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}