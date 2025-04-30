import os
import subprocess
from huggingface_hub import snapshot_download
parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
models_dir = os.path.abspath(os.path.join(parent_dir, '..', "models"))
print(models_dir)

# Download the model from the Hugging Face Hub
repo_id = "LiuZichen/MagicQuill-models"  # or any other model/dataset ID
snapshot_download(repo_id=repo_id, local_dir=models_dir)
