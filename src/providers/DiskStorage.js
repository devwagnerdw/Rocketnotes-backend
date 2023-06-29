const fs = require("fs"); // Importa o módulo fs para realizar operações de sistema de arquivos
const path = require("path"); // Importa o módulo path para lidar com caminhos de arquivos
const uploadConfig = require("../configs/upload"); // Importa a configuração de upload

class DiskStorage {
  async saveFile(file) {
    // Método assíncrono para salvar um arquivo
    await fs.promises.rename(
      // Renomeia o arquivo temporário para a pasta de uploads
      path.resolve(uploadConfig.TMP_FOLDER, file), // Caminho do arquivo temporário
      path.resolve(uploadConfig.UPLOADS_FOLDER, file) // Caminho do arquivo na pasta de uploads
    );

    return file; // Retorna o nome do arquivo salvo

  }
  

  async deleteFile(file) {
    // Método assíncrono para excluir um arquivo
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file); // Caminho do arquivo na pasta de uploads

    try {
      await fs.promises.stat(filePath); // Verifica se o arquivo existe
    } catch {
      return; // Se o arquivo não existe, retorna sem fazer nada
    }

    await fs.promises.unlink(filePath); // Exclui o arquivo
  }
}

module.exports = DiskStorage; // Exporta a classe DiskStorage
