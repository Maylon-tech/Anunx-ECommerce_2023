import {  useDropzone } from 'react-dropzone'
import { AiOutlineDelete } from 'react-icons/ai'
import {  Label, WrapperUpload, ErrorMsg, BoxDropZoneDinamic, Image,
 PrincipalLabel, BoxDropZone, IconButton } from '@/styles/publish'


const FileUpload = ({ files, errors, touched, setFieldValue }) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            
            const newFiles = acceptedFile.map((file) => {
                return {
                    ...file,
                    preview: URL.createObjectURL(file)
                }
            })
            setFieldValue('files', [
                ...files,
                newFiles
            ])
        }
    })

    const handleRemoveFile = (filePath) => {
        console.log(filePath, files)
        const newFileState = files.filter(file => file.path !== filePath)
        setFieldValue('files', newFileState)
    }

    return (
        <>
            <Label>Imagens</Label>
            <h4>A Primeira imagens e a foto principal do anuncio.</h4>
                { 
                    errors && touched
                        ? <ErrorMsg>{errors}</ErrorMsg>
                        : null
                }
            <WrapperUpload>
                <BoxDropZone {...getRootProps()}>  
                    <input name='files' {...getInputProps()} />                      
                    <h4>Clique para adicionar ou arraste a imagem aqui.</h4>
                </BoxDropZone>
                {
                    files.map((file, index) => (
                        <BoxDropZoneDinamic key={file.index}>  
                            <Image src={file.preview} alt='boxImg' width={140} height={140} />  
                            {
                                index === 0 
                                ? <PrincipalLabel>Principal</PrincipalLabel> 
                                : null
                            }
                            <IconButton onClick={() => handleRemoveFile(file.path)}>
                                <AiOutlineDelete />
                            </IconButton>
                        </BoxDropZoneDinamic>
                    ))
                }
            </WrapperUpload>
        </>
    )
}

export default FileUpload