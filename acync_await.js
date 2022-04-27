(async () => {
    try {
        let result = await pro();
        console.log(result);
    } catch (err) { 
        console.log(err);
    }
    console.log("こちらのほうが遅く実行される")
})();