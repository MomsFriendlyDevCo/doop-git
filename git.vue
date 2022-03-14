<script lang="js" frontend>
app.service('$git', () => {
	var $git = {}

	$git.current = 0/* @IMPORT: app.git.current */;

	return $git;
});
</script>