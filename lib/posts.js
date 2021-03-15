import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostData(){
    //get file names under /post
    const fileNames = fs.readdirSync(postDirectory);
    const allPostsData = fileNames.map(fileName =>{
        // remove '.md' from file name to get id
        const id = fileName.replace(/\.md$/, '');
        //read markdown file as string
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        //combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    //Sort posts by data
    return allPostsData.sort( (a,b)=>{
        if(a.data < b.data){
            return 1
        }else{
            return -1
        }
    })
};

export function getAllPostIds(){
    const fileName = fs.readdirSync(postDirectory);

    // Returns an array that looks like this:
    // [
    //     {
    //         params:{
    //             id: 'ssg-ssr'
    //         }
    //     },
    //     {
    //         params: {
    //             id: 'pre-rendering'
    //         }
    //     }
    // ]
    return fileName.map( fileName=>{
        return {
            params:{
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export function getPostData(id){
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    //Use gray-mattter to parse the post meradata section
    const matterResult = matter(fileContents);

    //Combine the data with the id
    return {
        id,
        ...matterResult.data
    }
}