hexo.extend.generator.register('fiction', function(locals, render, callback) {
    // render('fiction/index.html', )
    locals.posts = locals.posts.filter(function(post) {
        var found = false;
        post.categories.each(function(cat){
            if (cat.name == 'Fiction') {
                found = true;
            }
        });
        return found;
    });

    render('fiction2/index.html', 'archive', locals);
    callback();
});
