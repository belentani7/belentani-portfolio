#!/usr/bin/env bash
# Crea una copia de seguridad portable sin node_modules, builds ni archivos de entorno.
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DATE_STAMP="${1:-$(date +%F)}"
BACKUP_PARENT="${2:-${PROJECT_ROOT}/../backups}"
BACKUP_NAME="Proyecto_Belentani_Portfolio_Backup_${DATE_STAMP}"
BACKUP_ROOT="${BACKUP_PARENT}/${BACKUP_NAME}"
ZIP_PATH="${BACKUP_PARENT}/${BACKUP_NAME}.zip"

rm -rf "${BACKUP_ROOT}"
mkdir -p "${BACKUP_ROOT}/src" "${BACKUP_ROOT}/docs" "${BACKUP_ROOT}/tests" "${BACKUP_ROOT}/assets"

cp -a "${PROJECT_ROOT}/client" "${BACKUP_ROOT}/src/client"
cp -a "${PROJECT_ROOT}/server" "${BACKUP_ROOT}/src/server"
cp -a "${PROJECT_ROOT}/shared" "${BACKUP_ROOT}/src/shared"
cp -a "${PROJECT_ROOT}/package.json" "${PROJECT_ROOT}/pnpm-lock.yaml" "${BACKUP_ROOT}/src/"
cp -a "${PROJECT_ROOT}/README.md" "${PROJECT_ROOT}/ideas.md" "${PROJECT_ROOT}/research.md" "${PROJECT_ROOT}/portfolio-architecture.md" "${PROJECT_ROOT}/todo.md" "${BACKUP_ROOT}/docs/"

printf '%s\n' 'No se han añadido tests automatizados específicos al portfolio estático.' > "${BACKUP_ROOT}/tests/README.md"
printf '%s\n' 'No hay assets binarios dentro del proyecto. El diseño usa CSS, SVG y tipografía web.' > "${BACKUP_ROOT}/assets/README.md"

rm -f "${ZIP_PATH}"
(cd "${BACKUP_PARENT}" && zip -rq "${ZIP_PATH}" "${BACKUP_NAME}")

printf 'Backup created: %s\n' "${ZIP_PATH}"
