$node = "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if (-not (Test-Path $node)) {
  Write-Host "Codex bundled Node.js를 찾을 수 없습니다."
  Write-Host "Node.js를 설치한 뒤 'node server.mjs'를 실행해 주세요."
  exit 1
}

Write-Host "Nova Studio 서버를 시작합니다."
Write-Host "브라우저에서 http://localhost:3000 을 열어주세요."
& $node "$PSScriptRoot\server.mjs"
