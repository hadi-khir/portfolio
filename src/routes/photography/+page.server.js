import { supabase } from "../../supabase";

export async function load() {
    /**
     * @type {{ url: string; alt: any; // store the alt tag in the object
     }[]}
     */
    let images = [];

    const { data, error } = await supabase
        .from("image")
        .select("name, alt_tag"); // add alt_tag to the select function

    if (error) {
        console.error(error);
        return;
    }
    
    data.forEach(image => {
        
        const imageName = image.name;
        const altTag = image.alt_tag; // get the alt tag value from the data

        const { data: url } = supabase.storage // use await to get the URL
            .from("photos")
            .getPublicUrl(imageName);

        if (url.publicUrl !== undefined) {
            images.push({
                url: url.publicUrl,
                alt: altTag // store the alt tag in the object
            });
        }
    });

    return {
        images: images
    };
}
