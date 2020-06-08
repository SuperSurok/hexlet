{
    const compareVersion = (ver1, ver2) => {
        const [a1, b1] = ver1.split('.');
        const [a2, b2] = ver2.split('.');

        const minor = Math.sign(b1 - b2);
        const major = Math.sign(a1 - a2);

        return major === 0 ? minor : major;
   };
}

{
    const compareVersion = (first, second) => {
        const [a1, b1] = first.split('.');
        const [a2, b2] = second.split('.');

        const major = Math.sign(a1 - a2);
        const minor = Math.sign(b1 - b2);

        return major === 0 ? minor : major;
    };
}