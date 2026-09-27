from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Media Nexus"
    API_V1_STR: str = "/api/v1"
    
    class Config:
        case_sensitive = True

settings = Settings()
