from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from app.services.websocket_manager import ConnectionManager
from app.services.ai_processor import process_asset_async
import asyncio

app = FastAPI(title="AI Media Nexus Core", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

manager = ConnectionManager()

@app.get("/")
async def root():
    return {"status": "online", "engine": "FastAPI + CUDA 12.6"}

@app.websocket("/ws/pipeline")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_json()
            asset_id = data.get("asset_id")
            asyncio.create_task(process_asset_async(asset_id, manager))
    except WebSocketDisconnect:
        manager.disconnect(websocket)
