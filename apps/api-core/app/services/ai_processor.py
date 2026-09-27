import asyncio
from app.services.websocket_manager import ConnectionManager

async def process_asset_async(asset_id: str, manager: ConnectionManager):
    stages = [
        {"status": "analyzing", "progress": 25},
        {"status": "generating_metadata", "progress": 60},
        {"status": "optimizing_mesh", "progress": 90},
        {"status": "ready", "progress": 100}
    ]
    for stage in stages:
        await asyncio.sleep(1.5)
        await manager.broadcast({
            "asset_id": asset_id,
            "status": stage["status"],
            "progress": stage["progress"],
            "logs": f"AI Engine working on stage: {stage['status']}"
        })
