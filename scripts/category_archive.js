// hexo.extend.generator.register('category_archive', function(locals, render, callback) {
//
//     ///
//     /// Creates a shallow clone of locals, replacing the posts property
//     ///
//     var localsClone = function(posts) {
//         var clone = {};
//         for (var key in locals)
//         {
//             clone[key] = locals[key];
//         }
//         clone.posts = posts;
//
//         return clone;
//     }
//
//     //
//     // Creates category pages
//     //
//     if (hexo.config.category_archives)
//     {
//         for (var i=0; i < hexo.config.category_archives.length; i++) {
//             var archive = hexo.config.category_archives[i].archive;
//             var allPosts = locals.posts.sort('date', -1);
//             var filteredPosts = allPosts.filter(function(post) {
//                 var found = false;
//                 post.categories.each(function(cat){
//                     if (cat.name == archive.category) {
//                         found = true;
//                     }
//                 });
//                 return found;
//             });
//             var categoryLocals = localsClone(filteredPosts);
//             hexo.log.i('Generating archive ' + archive.slug + ' with ' + filteredPosts.length + ' posts');
//             render(archive.slug + '/index.html', archive.template, categoryLocals);
//         }
//     }
//
//     callback();
// });
//
// hexo.extend.helper.register('excludedFromIndex', function(post){
//     var excluded = false;
//     for (var i=0; i < hexo.config.category_archives.length; i++) {
//         var archive = hexo.config.category_archives[i].archive;
//         var found = false;
//         post.categories.each(function(cat){
//             if (cat.name == archive.category) {
//                 found = true;
//             }
//         });
//
//         if (found && archive.exclude_from_index) {
//             excluded = true;
//         }
//     }
//
//     return excluded;
// });
