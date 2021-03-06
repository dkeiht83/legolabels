// * ———————————————————————————————————————————————————————— * //
// * 	parts controller
// * ———————————————————————————————————————————————————————— * //
lego_labels.controller('parts_controller', function ($scope, $rootScope, part_service) {

	$rootScope.parts = {}

	part_service.get_parts()
		.then(function (get_parts_response) {
			$rootScope.parts = get_parts_response.data.parts

			if ($rootScope.first_login) {
				part_service.select_all()
			}
		})

	$scope.select_app_parts = function () {
		part_service.select_all()
	}

	$scope.deselect_app_parts = function () {
		part_service.deselect_all()
	}

	$scope.sort_parts = function (sort_by) {
		$rootScope.parts = _.orderBy($rootScope.parts, sort_by)
	}

	$scope.deleted_selected_parts = function () {
		part_service.delete_selected()
	}

	$rootScope.get_selected_part_count = part_service.get_selected_part_count

})
